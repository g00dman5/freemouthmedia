/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import NavLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavRight from 'material-ui/svg-icons/navigation/chevron-right';
import NavUp from 'material-ui/svg-icons/navigation/expand-less';
import NavDown from 'material-ui/svg-icons/navigation/expand-more';
import MoreOver from 'material-ui/svg-icons/navigation/more-horiz';
import MoreUp from 'material-ui/svg-icons/navigation/more-vert';
import BurgerMenu from 'material-ui/svg-icons/navigation/menu';

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
      backgroundAttachment:"scroll",
      display:"block"

    }

    const vidScreen={
      position:"relative"

    }

    const NavLeftStyle={
      color:"#c0c0c0",
      position:"absolute",
      top:"50%",
      width:"64px",
      height:"64px",
      left:"0px",
    }

    const NavRightStyle={
      color:"#c0c0c0",
      position:"absolute",
      top:"50%",
      width:"64px",
      height:"64px",
      right:"0px"

    }

    const NavUpStyle={
      color:"#ffffff",
    }

    const NavDownStyle={
      color:"#ffffff",
    }

    const MoreOverStyle={
      color:"#c0c0c0",
      position:"absolute",
      bottom:"30px",
      width:"100%",
      height:"70px"


    }

    const MoreUpStyle={
      color:"#ffffff",
    }

    const burgerMenuStyleM={
      color:"#c0c0c0",
      position:"absolute",
      height:"50px",
      width:"60px",
      top:"0",
      left:"0",
      margin:"auto"






    }

    const NavLeftStyleM={
      color:"#c0c0c0",
      position:"absolute",
      top:"50%",
      width:"64px",
      height:"64px",
      left:"1em"
    }

    const NavRightStyleM={
      color:"#ffffff",
      position:"absolute",
      top:"50%",
      width:"64px",
      height:"64px",
      right:"1em"
    }

    const MoreOverStyleM={
      color:"#c0c0c0",
      position:"absolute",
      bottom:"5px",
      width:"100%",
      height:"40px"

    }

    const articleStyle={
      boxSizing:"content-box",
      marginTop:"0.7em",


    }


    const pStyle={
      color:"#ffffff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",
      bottom:"auto",



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


        </Responsive>

        <header>
          <Responsive minDeviceWidth={1024}>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
          </Responsive>
        </header>

        <main>
         <Responsive minDeviceWidth={1024}>
          <div>
            <NavLeft style={NavLeftStyle}/>
            <NavRight style={NavRightStyle}/>
            <NavUp style={NavUpStyle}/>
            <NavDown style={NavDownStyle}/>
            <MoreOver style={MoreOverStyle}/>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div>
           <NavLeft style={NavLeftStyleM}/>
           <NavRight style={NavRightStyleM}/>
           <MoreOver style={MoreOverStyleM}/>
           <BurgerMenu style={burgerMenuStyleM}/>
          </div>
        </Responsive>











        </main>

        <footer>
        </footer>
       </div>
     );
   }
  }
