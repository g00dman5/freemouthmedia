/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import ImgBlock from 'components/ImgBlock';
export default class Home extends React.PureComponent

{
  render() {
    const navStyle={
      border: "1px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      background:"rgb(0, 0, 0, .0",
      zIndex:"99999",

    }

    const mobileNav={
      border: "1px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      background:"rgb(0, 0, 0, .0",
      zIndex:"99999",

    }

    const linkStyleM={
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"1.6em",
      fontFamily:"'Squada One', cursive",

    }

    const linkStyle={
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",

    }

    const container={
      background:"url(http://www.studiorussophotography.com/img/s/v-2/p693323167-5.jpg)",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundPosition:"center center",

    }

    const vidScreen={
      backgroundSize:"cover",
    }

    return (
      <div style={container}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Responsive minDeviceWidth={1024}>
          <div style={navStyle}>
            <Link style={linkStyle} to= '/media'>Media </Link>
            <Link style={linkStyle} to= '/'> Home </Link>
            <Link style={linkStyle} to= '/tour'>Tour </Link>
            <Link style={linkStyle} to= '/shop'>Shop </Link>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div style={mobileNav}>
            <Link style={linkStyleM} to= '/media'>Media </Link>
            <Link style={linkStyleM} to= '/'> Home </Link>
            <Link style={linkStyleM} to= '/tour'>Tour </Link>
            <Link style={linkStyleM} to= '/shop'>Shop </Link>
          </div>
        </Responsive>

        <header>
          <Responsive minDeviceWidth={1024}>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
          </Responsive>
        </header>

        <main>

            <iframe style={vidScreen} src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>



        </main>

        <footer>
        </footer>
       </div>
     );
   }
  }
