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
      backgroundColor:"rgb(153, 0, 0, .5)",
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
      backgroundPosition:"center center",

    }

    const soundcloudFrame={
      boxSizing:"border-box",
      position:"relative",
      paddingTop:"40px",
      paddingLeft:"2px",
      paddingRight:"2px",

    }

    const soundcloudFrameM={
      padding:"5px",
      margin:"20px",

    }

    const bannerImage={
      backgroundImage:"url(http://www.studiorussophotography.com/img/s/v-2/p903208717-5.jpg)",
      minHeight:"100vh",
      width:"100%",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      display:"block",
      zIndex:"99999",

    }

    const bannerImageM={
      backgroundImage:"url(https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.0-9/168054_485575287861_6208488_n.jpg?oh=3fbe2bef9c4914bc9baa56bdd1a7c1d0&oe=59742DE9)",
      position:"absolute",
      height:"auto",
      width:"100%",

    }

    const playerImageM={
      left:"25",
      position:"relative",
      padding:"4px",
      width:"300",
      height:"266",
      marginBottom:"5px"

    }

    const vidScreen={
      position:"relative",
      margin:"15px",
      paddingLeft:"10",
      paddingRight:"10",
      textAlign:"center"

    }

    const vidScreenM={
      position:"relative",
      width:"100%",
      height:"315",

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
          <Responsive minDeviceWidth={1024}>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
          </Responsive>


          <main>
           <Responsive minDeviceWidth={1024}>
            <div>
              <Link to="/shop"><NavLeft style={NavLeftStyle}/></Link>
              <Link to="/"><NavRight style={NavRightStyle}/></Link>
              <NavUp style={NavUpStyle}/>
              <NavDown style={NavDownStyle}/>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div>
             <Link to="/shop"><NavLeft style={NavLeftStyleM}/></Link>
             <Link to="/"><NavRight style={NavRightStyleM}/></Link>
            </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
            <div style={bannerImage}></div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div></div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>

            <div style={soundcloudFrame}>
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316950173&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div style={soundcloudFrameM}>
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316950173&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>
            </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
            <div style={vidScreen}>
              <iframe width="854" height="480" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div style={vidScreenM}>
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </Responsive>





          </main>


          <footer>
          </footer>
      </div>
    );
  }
}
