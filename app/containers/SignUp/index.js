/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {

  constructor(props){
    super(props);
    this.state= {
      email:"",
      name:"",
      password:"",
    }
  }

  handleEmail = (event)=> {
    this.setState({
      email:event.target.value
    })
  }

  handleName = (event)=> {
    this.setState({
      name:event.target.value
    })
  }

  handlePassword = (event)=> {
    this.setState({
      password:event.target.value
    })
  }

  signUp = () => {
    var data = new FormData();
    data.append("email", this.state.email);
    data.append("name", this.state.name);
    data.append("password", this.state.password);

    fetch("http://localhost:8000/api/signUp",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if (json.success) {
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
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

          <div style={bannerImage}>

            <div style={inputStyle}>
              <input onChange={this.handleName} type="text" placeholder="Username"/>
              <input onChange={this.handleEmail} type="text" placeholder="Email"/>
              <input onChange={this.handlePassword} type="password" placeholder="Password"/>
              <input onTouchTap={this.signUp} type="submit" placeholder="Submit"/>
            </div>




          </div>

      </div>
    );
  }
}
