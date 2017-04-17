/*
 *
 * Media
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

export default class Media extends React.PureComponent {
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
      position:"fixed",
      height:"50px",
      width:"60px",
      top:"25",
      left:"0",
      margin:"auto",






    }

    const NavLeftStyleM={
      color:"#c0c0c0",
      position:"fixed",
      top:"50%",
      width:"64px",
      height:"64px",
      left:"-1em"
    }

    const NavRightStyleM={
      color:"#c0c0c0",
      position:"fixed",
      top:"50%",
      width:"64px",
      height:"64px",
      right:"-1em",
    }

    const MoreOverStyleM={
      color:"#c0c0c0",
      position:"absolute",
      bottom:"5px",
      width:"100%",
      height:"40px"

    }

    const backgroundwrapper={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17951615_10203128057598149_4304219126977797958_n.jpg?oh=952eddc11f8cf95272fa41d89a1af6eb&oe=5988D0DF)",
      right:"45px",
      minHeight:"100vh",
      backgroundRepeat:"repeat-y",



    }

    const vidScreen={
      width:"100%",
      height:"50%",
      boxSizing:"border-box",
      position:"absolute",
      display:"grid",
      margin:"34px",
      left:"0",
      maxDeviceWidth:"100%"



    }

    const soundcloudFrame={

    }



    return (
      <div style={backgroundwrapper}>
        <Helmet title="Media" meta={[ { name: 'description', content: 'Description of Media' }]}/>




          <Responsive minDeviceWidth={1024}>
            <div style={navStyle}>
              <Link style={linkStyle} to= '/media'>Media </Link>
              <Link style={linkStyle} to= '/'> Home </Link>
              <Link style={linkStyle} to= '/tour'>Tour </Link>
              <Link style={linkStyle} to= '/shop'>Shop </Link>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div>
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
            </div>
          </Responsive>

          <div></div>

          <div style={soundcloudFrame}><iframe width="auto" height="auto" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240030267&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div>

          <div style={vidScreen}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameborder="5" allowfullscreen></iframe>

           <iframe width="560" height="315" src="https://www.youtube.com/embed/Eo60_OaYUOs?rel=0&amp;showinfo=0" frameborder="5" allowfullscreen></iframe>
         </div>







          </main>


          <footer>
          </footer>
      </div>
    );
  }
}