/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignIn extends React.PureComponent {
  render() {

    const inputStyle={

    }


    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

          <div style={inputStyle}>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <input type="submit" placeholder="Submit"/>
          </div>

      </div>
    );
  }
}
