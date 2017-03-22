/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Thought extends React.PureComponent {
  render() {
    const divStyle1={
      backgroundImage:"url('http://www.studiorussophotography.com/img/s/v-2/p903208717-4.jpg')",
      backgroundSize: "cover",
      height: "100vh",
      }
    }
    return (
      <div>
        <Helmet title="Thought" meta={[ { name: 'description', content: 'Questions of politics and existential philosophy.' }]}/>


          <header>
            <nav>
              <Link to= '/'> Home </Link>
              <Link to= '/Thought'> Thought </Link>
              <Link to= '/culture'>Culture </Link>
            </nav>
          </header>

          <main>


          </main>

          <footer>
          </footer>

      </div>
    );
  }
}
