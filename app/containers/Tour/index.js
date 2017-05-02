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

    const posterGallery={
      boxSizing:"content-box",
      overflow:"hidden",
      display:"block",
      paddingLeft:"5px",
      paddingRight:"5px",
      paddingBottom:"5px",
      justifyContent:"center"

    }

    const posterM={
      padding:"2px",
      margin:"5px",
      width:"162",
      height:"250",
      float:"left",
      overflow:"hidden"

    }

    const poster={
      padding:"2px",
      margin:"5px",
      width:"162",
      height:"250",
      float:"left"

    }

    const bannerImage={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1002638_10151805886217862_1791576482_n.jpg?oh=24aa96ecc9f9c6c30eacbae56c5eaa8d&oe=598C9243)",
      minHeight:"100vh",
      maxDeviceWidth:"100%",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      display:"block",
      zIndex:"99999",
      margin:"2px",
    }

    const bannerImageM={
      backgroundImage:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/182264_491894117861_1912763_n.jpg?oh=2620955cf0890455c8a868039429581d&oe=5981FDBF)",
      minHeight:"100vh",
      maxDeviceWidth:"100%",
      backgroundSize:"cover",
      backgroundAttachment:"scroll",
      display:"block",
      margin:"auto"
    }

    const tableDiv={
      boxSizing:"content-box",
      padding:"5",
      margin:"5",


    }

    const tableStyle={
      textAlign:"center",
      clear:"both",
      width:"100%",
      fontFamily:"'Rubik', sans-serif"



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
            </Responsive>
            <Responsive maxDeviceWidth={1023}>
            </Responsive>
          </header>

          <main>
           <Responsive minDeviceWidth={1024}>
            <div>
              <Link to="/"><NavLeft style={NavLeftStyle}/></Link>
              <Link to="/shop"><NavRight style={NavRightStyle}/></Link>
              <NavUp style={NavUpStyle}/>
              <NavDown style={NavDownStyle}/>
            </div>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <div>
             <Link to="/"><NavLeft style={NavLeftStyleM}/></Link>
             <Link to="/shop"><NavRight style={NavRightStyleM}/></Link>
            </div>
          </Responsive>
        </main>




        <Responsive minDeviceWidth={1024}>

          <div style={bannerImage}></div>

          <div style={posterGallery}>
            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1006032_10151586320762862_702843352_n.jpg?oh=c6a7f8402d14d39fed93e4a40f259dfe&oe=598EADC5"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/995720_10151540628512862_1243357349_n.jpg?oh=2cee9c03b2c463f06841a5a404af27c3&oe=597B60A6"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/163753_480314142861_538236_n.jpg?oh=32b9627b752f8783e42eebe8a6f19b59&oe=5980F862"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22042_279763947861_138539_n.jpg?oh=479ee668d885e42492d87774151f7561&oe=5990947C"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/297255_10150298172717862_72648603_n.jpg?oh=16eb022b9131d6355871742131c75bb5&oe=598BBC43"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/s960x960/883555_10151848614472862_259930318_o.jpg?oh=42e1531210304159cda59a7bb6f5af2c&oe=5983DE12"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1917798_168195342861_5984679_n.jpg?oh=5676d8db590090ea736d31e16a623aef&oe=598DBD94"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/74183_135602182861_8247101_n.jpg?oh=191aee3121139c889665d9fd041092be&oe=598F4ACF"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1915563_113201422861_4692371_n.jpg?oh=180ccd779e9aebe22864906feddd4286&oe=5999B755"/>

            <img style={poster} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/s960x960/913909_10151430783672862_1307538094_o.jpg?oh=06a058f5fe46a8577be8fe87a2464fda&oe=5996C88D"/>

            <img style={poster} src="http://www.suburbanapologist.com/get-learned-wmnfs-30th-tropical-heatwave-let-us-help-you-plan-your-day/"/>
            </div>

        </Responsive>
        <Responsive maxDeviceWidth={1023}>

          <div style={bannerImageM}></div>

          <div style={posterGallery}>
            <img style={posterM} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1006032_10151586320762862_702843352_n.jpg?oh=c6a7f8402d14d39fed93e4a40f259dfe&oe=598EADC5"/>

            <img style={posterM} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/995720_10151540628512862_1243357349_n.jpg?oh=2cee9c03b2c463f06841a5a404af27c3&oe=597B60A6"/>

            <img style={posterM} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/163753_480314142861_538236_n.jpg?oh=32b9627b752f8783e42eebe8a6f19b59&oe=5980F862"/>

            <img style={posterM} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22042_279763947861_138539_n.jpg?oh=479ee668d885e42492d87774151f7561&oe=5990947C"/>


          </div>


        </Responsive>


        <div tableDiv>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>

              <tr>
                <td>Dec 31</td>
                <td>Atlanta</td>
                <td>Variety Playhouse</td>
                <Link to="/"><td>Tickets</td></Link>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    );
  }
}
