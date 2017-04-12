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

    const background={
      color:"#000000",


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
      left:"1em"
    }

    const NavRightStyleM={
      color:"#ffffff",
      position:"fixed",
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


    const bannerStyle={
      backgroundImage:"url(http://www.studiorussophotography.com/img/s/v-2/p693323167-5.jpg",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundPosition:"center center",
      backgroundAttachment:"scroll",
      display:"block",
    }


    const pStyle={
      color:"#330000",
      fontSize:"18px",
      fontFamily:"'Squada One', cursive",
      padding:"15px",
      paddingLeft:"15px",
      paddingRight:"15px",




    }

    const span={
      color:"000000",
      fontSize:"25px",
      fontFamily:"'Squada One', cursive",
      padding:"15px",
      paddingLeft:"15px",
      paddingRight:"15px",
    }

    const vidScreen={
      position:"relative"

    }

    return (
      <div style={background}>
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
          <div>
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
           <BurgerMenu style={burgerMenuStyleM}/>
          </div>
        </Responsive>

        <div style={bannerStyle}></div>

        <div style={pStyle}>
        <p><span style={span}>George Ball, Vietnam veteran of 1967-69.</span> Also known as History Man, the Athens Bird.
        I witnessed firsthand the Bird glide out of his wheelchair like he’d just been brushed by the hems  of Jesus Christ, and WALTZ over to the owner of Knuckle Sandwiches and say “Scuse me sir, can a old nigga please get  a sandwich – FOR FREE?!”</p>

        <p>History Man, the Athens Bird.  A Broad Street miracle. He told me he wrote a newsletter and gave me a copy to take for myself. It was a single sheet of white paper that looked to be covered in pen illustrations and gibberish. Upon closer inspection, it was a Xeroxed copy of another piece of paper that was covered in pen illustrations and gibberish. Some of the sentences ran over to the opposite side of the paper and some of them were written in the margins perpendicular to others. Hand drawn borders and underlines divided the different sections of the newsletter into barely decipherable nuggets of meaninglessness.</p>

        <p>The illustration was a stick figure drawing of a bird. Written at the top center of the page, I took it as the brand icon and letterhead and started there. As best as a mere human could possibly do, I will try to relay what I was shown. Dear reader, I cannot make this shit up:</p>

        <p>ATHENS Bird is not feeling at his best and he and his History Man are citizens of Athens, Clarke   County, Georgia is requesting all concern people of this town Classic City, which mean Learning to call  endandger missing person hotline or call the Clarke County Sheriff Ira Edward Jr or Police Chief Jackie Lumpkin of any news of Mayflower Restaurant employee Della an yellow skin, 5-7’ 130 LB Female that is missing fer over 9 months.</p>

        <p>Terry Lynn Hunter, my second cusion, is also dead and Mr. Colling also and first a female Caucasian girl was Jimmy first Athens KILL AND Jimmy was boyfriend to all four girls. He was living on Farview with bad apple Tommy Brown and now its said he cut off his ankle brace and left town . Chicago, South Carolina was said he come from.</p>

        <p>Athens Bird was told that Jimmy say he buries women where no one can find them. I was said that he receive $150,000 from his uncle and left dodoe as meaning left town.</p>

        <p>The paper, as you can see, had tidbits on local crime, as well as a ticker for social and cultural   happenings and commentary: Pretty progressive layout for a down on his luck, hungry as shit Vietnam veteran   with no legs. But who am I to lay standards?</p>

        <p>Pop the black man fly that homeless sign to get crack money. Mike that draw bulldog on crack. Lizziemae the black girl on crack.
        The Caucasian white female is being pimp by her boyfriend in front of Herry Clothes Closet for change...</p>

        <p>Giving those so call homeless people money you are causing strokes, seizures to them as paramedic can prove treating them several times they are on crack whisky.</p>

        <p>There are seven Caucasian females living alone and I have observe one black one white male both muscle around 6’1 240-260 lbs. Knocking on their door and coming from around their apartment and even the black guy was sitting on the porch and the first murder of a Caucasian female haven’t even been found out. The surspected killer probley running afraid and thanks to his daddy power he getting away more on that story in the next edition look for it.</p>

        <p>I’m still looking for it. </p>
        </div>

        <div style={vidScreen}><iframe width="100%" height="315" src="https://www.youtube.com/embed/VhN0jenrZqM?rel=0&amp;showinfo=0" frameborder="1" allowfullscreen></iframe></div>


    <div>

  </div>









        </main>

        <footer>
        </footer>
       </div>
     );
   }
  }
