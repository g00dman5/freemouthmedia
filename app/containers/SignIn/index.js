/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignIn extends React.PureComponent {

  constructor(props){
    super(props);
    this.state= {
      email:"",
      password:"",
    }
  }

  handleEmail = (event)=> {
    this.setState({
      email:event.target.value
    })
  }

  handlePassword = (event)=> {
    this.setState({
      password:event.target.value
    })
  }

  signIn = () => {
    var data = new FormData();
    data.append("email",this.state.email);
    data.append("password",this.state.password);

    fetch("",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.success) {
        alert(json.success);
      }

      else if (json.error) {
        alert(json.error);
      }
    })

  }






  render() {

    const bannerImage={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/425176_10150581004417862_994448017_n.jpg?oh=7c454d2f298e22c78fc2799e24c8496b&oe=59969CD2)",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      display:"block",
      zIndex:"99999",
      margin:"2px",
    }

    const inputStyle={
      textAlign:"center",
    }


    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

          <div style={bannerImage}>

            <div style={inputStyle}>
              <input onChange={this.handleEmail} type="text" placeholder="Email"/>
              <input onChange={this.handlePassword} type="text" placeholder="Password"/>
              <input onTouchTap={this.signIn} type="submit" placeholder="Submit"/>
            </div>



          </div>




      </div>
    );
  }
}
