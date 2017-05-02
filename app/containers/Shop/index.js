/*
 *
 * Ttour
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

export default class Ttour extends React.PureComponent {
  render() {
    const navStyle={
      border: "1px solid #bbbbbb",
      borderRadius:"5px",
      backgroundColor:"rgba(0, 0, 0, 0.55)",
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
      backgroundColor:"rgba(0, 0, 0, 0.55)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      zIndex:"99999",

    }

    const linkStyleM={
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"1.6em",
      fontFamily:"'Squada One', cursive",
      textTransform:"uppercase",


    }

    const linkStyle={
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",
      textTransform:"uppercase",


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
      right:"-.5em"
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

    const bannerImage={
      backgroundImage:"url(https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.0-9/425176_10150581004417862_994448017_n.jpg?oh=7c454d2f298e22c78fc2799e24c8496b&oe=59969CD2)",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      display:"block",
      zIndex:"99999",
      margin:"2px",
    }

    const bannerImageM={
      backgroundImage:"url(https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.0-9/425176_10150581004417862_994448017_n.jpg?oh=7c454d2f298e22c78fc2799e24c8496b&oe=59969CD2)",
      minHeight:"100vh",
      maxDeviceWidth:"100%",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      margin:"2px",
    }


    const tourWidget={
      boxSizing:"border-box",
      position:"relative",

    }




    return (
      <div style={backgroundwrapper}>
        <Helmet title="Ttour" meta={[ { name: 'description', content: 'Description of Ttour' }]}/>

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
            <div>
              <Link to="/tour"><NavLeft style={NavLeftStyle}/></Link>
              <Link to="/media"><NavRight style={NavRightStyle}/></Link>
              <NavUp style={NavUpStyle}/>
              <NavDown style={NavDownStyle}/>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div>
             <Link to="/tour"><NavLeft style={NavLeftStyleM}/></Link>
             <Link to="/media"><NavRight style={NavRightStyleM}/></Link>
            </div>
          </Responsive>
        </header>

        <main>
         <Responsive minDeviceWidth={1024}>

           <div style={bannerImage}></div>

         </Responsive>
         <Responsive maxDeviceWidth={1023}>

           <div style={bannerImageM}></div>

         </Responsive>

        </main>






        <Responsive maxDeviceWidth={1023}>

        </Responsive>

      </div>
    );
  }
}
