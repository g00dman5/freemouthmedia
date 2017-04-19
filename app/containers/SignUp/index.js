/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {
  render() {

    const inputStyle={

    }


    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

      <div style={inputStyle}>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="submit" placeholder="Submit"/>
      </div>

      </div>
    );
  }
}
