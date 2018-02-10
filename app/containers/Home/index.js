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

export default class Home extends React.PureComponent {
  render() {
    const navStyle={
      border: "1px solid #bbbbbb",
      backgroundColor:"rgba(248, 248, 255, 0.55)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      zIndex:"99999",

    }

    const mobileNav={
      border: "1px solid #bbbbbb",
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

    const burgerMenu={
      color:"#F8F8FF",
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

    const mainContainer={

    }

    const heroFigure1={
      backgroundImage:"url(http://www.studiorussophotography.com/img/s/v-2/p693323167-5.jpg)",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundPosition:"center center",
      backgroundAttachment:"scroll",
      display:"block",
      zIndex:"99999",

    }

    const heroFigureM1={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/179236_485591737861_5817338_n.jpg?oh=045ad20b435cb4c05a517f8dc9133116&oe=59C06354)",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      margin:"2px",
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
      height:"368",
      padding:"25px",

    }


    const backgroundwrapper={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17951615_10203128057598149_4304219126977797958_n.jpg?oh=952eddc11f8cf95272fa41d89a1af6eb&oe=5988D0DF)",
      minHeight:"100vh",
      backgroundRepeat:"repeat-y",
      backgroundPosition:"center center"

    }





    return (

      <div style={backgroundwrapper}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Responsive minDeviceWidth={1024}>
          <div style={navStyle}>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div style={mobileNav}>

          </div>
        </Responsive>



        <main>
         <Responsive minDeviceWidth={1024}>
          <div>
            <Link to="/media"><NavLeft style={NavLeftStyle}/></Link>
            <Link to="/tour"><NavRight style={NavRightStyle}/></Link>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div>
           <Link to="/media"><NavLeft style={NavLeftStyleM}/></Link>
           <Link to="/tour"><NavRight style={NavRightStyleM}/></Link>
          </div>
        </Responsive>

        <Responsive minDeviceWidth={1024}>
          <div style={mainContainer}></div>
            <div style={heroFigure1}></div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
            <div style={heroFigureM1}></div>

        </Responsive>



        <Responsive minDeviceWidth={1024}>
          <div style={vidScreen}>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div style={vidScreenM}>
            <iframe width="100%" height="100%" position="absolute" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </Responsive>





    <div>

  </div>




        </main>

        <footer>
        </footer>
       </div>
     );
   }
  }
