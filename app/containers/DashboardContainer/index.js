/*
 *
 * DashboardContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class DashboardContainer extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      title:"",
      body:"",
      image:"",
      preview:"",
    }
  }

  handleTitle = (event)=> {
    this.setState({
      title:event.target.value
    })
    console.log(this.state.title);
  }

  handleBody = (event)=> {
    this.setState({
      body:event.target.value
    })
  }

  handleImage= (event)=> {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image:file,
        preview:reader.result,
      })
    }

    reader.readAsDataURL(file);
  }

  storeArticle = () => {



  var data = new FormData();
  data.append("title", this.state.title);
  data.append("body", this.state.body);
  data.append("image", this.state.image);

  fetch("http://localhost:8000/api/storeArticle",{
    method:"post",
    body:data
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    if (json.success) {
      alert("Success");
    }

    else if (json.error) {
      alert("Error");
    }
  })

}


  render() {
    return (
      <div>
        <Helmet title="DashboardContainer" meta={[ { name: 'description', content: 'Description of DashboardContainer' }]}/>

        <input onChange={this.handleTitletype} type="text" placeholder="title"/>
        <textarea onChange={this.handleBody} placeholder="body"></textarea>
        <input onChange={this.handleImage} type="file"/>
        <input onTouchTap={this.storetype} type="submit"/>
        <img src={this.storeArticle}
        />


      </div>
    );
  }
}
