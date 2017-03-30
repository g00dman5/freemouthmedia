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
export default class Home extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      articles:[
        {
          img:"https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb86/58bc4b9bbb7f1e8f71caab38/1488735138453/?format=750w",
          title:"Chronicles of Funk: Volume 2",
          body:"",
          tint:"tint1",
        },

        {
          img:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1474386_3773444550492_1255969500_n.jpg?oh=83790fe64dc3acb182c9eafefcd59b33&oe=595A4289",
          title:"Battleground Dakota: Day 268",
          body:"",
          tint:"tint2"
        },

        {
          img:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13346971_10100791122022319_3474033419697538657_n.jpg?oh=f3d7a4106001bd470b8c1a41bc57168d&oe=5959B8A1",
          title:"Augusta stars unite at Sky City.",
          body:"",
          tint:"tint3"
        },

        {
          img:"https://files.foreignaffairs.com/styles/large-crop-landscape/s3/taxonomy-images/region-syria.jpg?itok=qxfNiu14",
          title:"The war in Syria that no one is talking about.",
          body:"",
          tint:"tint4"
        },

        {
          img:"https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb86/58b3620bf7d1ff7aff6ff300/1488151058766/?format=750w",
          title:"Chronicles of Funk: Volume 1",
          body:"",
          tint:"tint5"
        },

        {
          img:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1002638_10151805886217862_1791576482_n.jpg?oh=52b0ed5ee4dc96d3addd685ffcb028a5&oe=59650543",
          title:"The metamorphosis of Goodman.",
          body:"",
          tint:"tint6"
        },
      ],
      activeIndex:0,
      activeArticle:""

    }
  }

  componentWillMount(){
    this.setState({
      activeArticle:this.state.articles[0]
    })
  }

  componentDidMount(){
    var _this=this;
    setInterval(function(){
      _this.nextArticle();
    },1000)
  }

  nextArticle = () => {
    var activeIndex = this.state.activeIndex;
    var nextIndex = activeIndex + 1;
    if(nextIndex > this.state.articles.length)
    {
      nextIndex = 0;
    }
    for(var i = 0; i < this.state.articles.length; i++){
      if(i == nextIndex){
        this.setState({
          activeArticle:this.state.articles[i]
        })
      }
    }
    this.setState({
      activeIndex: nextIndex
    })
  }

  render() {
    const bannerStyle={
      width:"100%",
      height:"auto",
      border:"1px solid #f2f2f2",
      borderRadius:"20px",


    }

    const navStyle={
      border: "1px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      background:"#ffffff",
      zIndex:"99999",
      top:"0",

    }

    const mobileNav={
      border: "1px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      background:"#ffffff",
      zIndex:"99999",

    }


    const linkStyleM={
      textDecoration:"none",
      color:"#0000ff",
      fontSize:"1.6em",
      fontFamily:"'Squada One', cursive",

    }


    const linkStyle={
      textDecoration:"none",
      color:"#0000ff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",

    }


    const headStyle={
      color:"#f90606",
      fontSize: "96px",
      display:"block",
      textAlign:"center",
      paddingTop:"3px",
      fontFamily:"'Bungee Shade', cursive",
      textShadow:"2px 2px 5px #000000",

    }

    const bodyStyle={
      color: "#000000",
      fontSize:"2em",
      textAlign:"center",
      fontFamily:"'Squada One', cursive",
      textShadow:"2px 2px 5px #000000",

    }

    const headStyleM={
      color:"#f90606",
      fontSize: "1.7em",
      display:"block",
      textAlign:"center",
      paddingTop:"3px",
      fontFamily:"'Bungee Shade', cursive",
      textShadow:"2px 2px 5px #000000",

    }

    const bodyStyleM={
      color: "#000000",
      fontSize:".8em",
      textAlign:"center",
      fontFamily:"'Squada One', cursive",
      textShadow:"2px 2px 5px #000000",

    }




    const galleryStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      padding:"45px",
      paddingTop:"200px",

    }

    const galleryStyleM={
      display: "flex",
      flexDirection:"column",

    }

    const imgStyle={
      border: "2px solid #ffffff",
      borderRadius:"25px",
      width: "33%",
      padding:"1px",
      boxShadow:"0px 0px 50px 10px rgba(0,0,0,0.1)",
      position:"relative",
      height: "350px",
      overflow:"hidden",


    }

    const imgStyleM={
      border: "2px solid #ffffff",
      borderRadius:"25px",
      width: "100%",
      padding:"1px",
      boxShadow:"0px 0px 50px 10px rgba(0,0,0,0.1)",
      position:"relative",
      height: "350px",
      overflow:"hidden",

    }


    const tint1={
      background: "rgba(215, 44, 44, 0.7)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#ffffff",
      fontSize: "40px",
      textAlign:"center",
      fontFamily:"'Yesteryear', cursive",
      textShadow:"2px 2px 5px #0000ff",

    }


    const tint2={
      background: "rgba(128, 128, 128, 0.7)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#ff0000",
      fontSize: "60px",
      textAlign:"center",
      fontFamily:"'Bahiana', cursive",
      textShadow:"2px 2px 5px #cccc00",

    }


    const tint3={
      background: "rgba(0, 0, 215, 0.3)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#ffffff",
      fontSize: "40px",
      textAlign:"center",
      fontFamily:"'Squada One', cursive",
      textShadow:"2px 2px 5px #ff0000",

    }


    const tint4={
      background: "rgba(128, 128, 128, 0.7)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#000000",
      fontSize: "40px",
      textAlign:"center",
      fontFamily:"'Bungee', cursive",
      textShadow:"2px 2px 5px #ffffff",

    }


    const tint5={
      background: "rgba(215, 44, 44, 0.7)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#ffffff",
      fontSize: "40px",
      textAlign:"center",
      fontFamily:"'Yesteryear', cursive",
      textShadow:"2px 2px 5px #0000ff",

    }


    const tint6={
      background: "rgba(250, 255, 245, 0.7)",
      width:"100%",
      height:"100%",
      position:"absolute",
      top:"0",
      borderRadius:"25px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#000000",
      fontSize: "50px",
      textAlign:"center",
      fontFamily:"'Bungee Inline', cursive",
      textShadow:"2px 2px 5px #ff0000",

    }


    const img={
      width:"100%",
      height:"100%",
      borderRadius:"25px",
      overflow:"hidden",

    }

    const headerStyle={
      width:"100%",
      height:"800px",
      background:"url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17498852_10203050802146811_167883510515255155_n.jpg?oh=228a9cb1167e75d490fd476493c5d1a1&oe=59646B38)",
      backgroundSize:"cover",


    }

    const vidStyle={


    }

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Responsive minDeviceWidth={1024}>
          <div style={navStyle}>
            <Link style={linkStyle} to= '/thought'>Thought </Link>
            <Link style={linkStyle} to= '/'> Home </Link>
            <Link style={linkStyle} to= '/culture'>Culture </Link>
            <Link style={linkStyle} to= '/shop'>Shop </Link>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div style={mobileNav}>
            <Link style={linkStyleM} to= '/thought'>Thought </Link>
            <Link style={linkStyleM} to= '/'> Home </Link>
            <Link style={linkStyleM} to= '/culture'>Culture </Link>
            <Link style={linkStyleM} to= '/shop'>Shop </Link>
          </div>
        </Responsive>

        <header style={headerStyle}>

          <Responsive minDeviceWidth={1024}>
            <div style={galleryStyle}>

              <ImgBlock imgSource={this.state.activeArticle.img}
              textStyle={tint1}
              text={this.state.activeArticle.title}
              imgStyle={imgStyle}/>

            </div>
          </Responsive>



        </header>

        <main>


          <Responsive minDeviceWidth={1024}>
           <p style={headStyle}>Thought/Culture</p>
           <p style={bodyStyle}>An experiment in critical thinking and creative expression!</p>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
           <p style={headStyleM}>Thought/Culture</p>
           <p style={bodyStyleM}>An experiment in critical thinking and creative expression!</p>
          </Responsive>



        <Responsive maxDeviceWidth={1023}>
          <div style={galleryStyleM}>
            <ImgBlock   imgSource="https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb 86/58bc4b9bbb7f1e8f71caab38/1488735138453/?format=750w"
            textStyle={tint1}
            text="Chronicles of Funk: Volume 2"
            imgStyle={imgStyleM}/>


            <ImgBlock   imgSource="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1474386_3773444550492_1255969500_n.jpg?o h=83790fe64dc3acb182c9eafefcd59b33&oe=595A4289"
            textStyle={tint2}
            text="Battleground Dakota: Day 268"
            imgStyle={imgStyleM}/>

            <ImgBlock   imgSource="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13346971_10100791122022319_3474033419697538  657_n.jpg?oh=f3d7a4106001bd470b8c1a41bc57168d&oe=5959B8A1"
            textStyle={tint3}
            text="Augusta stars unite at Sky City."
            imgStyle={imgStyleM}/>

            <ImgBlock   imgSource="https://files.foreignaffairs.com/styles/large-crop-landscape/s3/taxonomy-images/region-sy  ria.jpg?itok=qxfNiu14"
            textStyle={tint4}
            text="The war in Syria that no one is talking about."
            imgStyle={imgStyleM}/>

            <ImgBlock   imgSource="https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb86/  58b3620bf7d1ff7aff6ff300/1488151058766/?format=750w"
            textStyle={tint5}
            text="Chronicles of Funk: Volume 1"
            imgStyle={imgStyleM}/>

            <ImgBlock   imgSource="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1002638_10151805886217862_1791576482_n.jpg?  oh=52b0ed5ee4dc96d3addd685ffcb028a5&oe=59650543"
            textStyle={tint6}
            text="The metamorphosis of Goodman."
            imgStyle={imgStyleM}/>
          </div>
        </Responsive>

          <div style={vidStyle}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VhN0jenrZqM" frameborder="0" allowfullscreen></iframe>
          </div>



        </main>

        <footer>

        </footer>

       </div>
     );
   }
  }
