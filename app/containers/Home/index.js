/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class Home extends React.PureComponent

{
  render() {
    const bannerStyle={
      width:"100%",
      height:"auto",

    }

    const navStyle={
      border: "6px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      background:"#ffffff",

    }

    const linkStyle={
      textDecoration:"none",
      color:"#0000ff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",

    }
    const footStyle={
      border: "6px solid #bbbbbb",
      borderRadius:"5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",

    }


    const headStyle={
      color:"#f90606",
      fontSize: "90px",
      display:"block",
      textAlign:"center",
      paddingTop:"3px",
      fontFamily:"'Bungee Shade', cursive",

    }

    const bodyStyle={
      color: "#000000",
      fontSize:"36px",
      textAlign:"center",
      fontFamily:"'Squada One', cursive",

    }

    const galleryStyle={
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap"



    }
    const imgStyle= {
      border: "1px solid #CD5C5C",
      width: "33%",
      height:"auto",
      padding:"2px"

    }


    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


          <div style={navStyle}>
            <Link style={linkStyle} to= '/thought'>Thought </Link>
            <Link style={linkStyle} to= '/'> Home </Link>
            <Link style={linkStyle} to= '/culture'>Culture </Link>
            <Link style={linkStyle} to= '/shop'>Shop </Link>
          </div>

        <header>
          <img style={bannerStyle} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10653515_4741856600188_3443636912086499995_n.jpg?oh=16a984235c16e49ff497da53dc70797c&oe=595EE6DE"/>
          <p style={headStyle}>Thought/Culture</p>
          <p style={bodyStyle}>An experiment in critical thinking and creative expression!</p>
        </header>

        <main>

          <div style={galleryStyle}>
              <img style={imgStyle} src="https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb86/58bc4b9bbb7f1e8f71caab38/1488735138453/?format=750w"/>
              <img style={imgStyle} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1474386_3773444550492_1255969500_n.jpg?oh=83790fe64dc3acb182c9eafefcd59b33&oe=595A4289"/>
              <img style={imgStyle} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13346971_10100791122022319_3474033419697538657_n.jpg?oh=f3d7a4106001bd470b8c1a41bc57168d&oe=5959B8A1"/>
              <img style={imgStyle} src="https://files.foreignaffairs.com/styles/large-crop-landscape/s3/taxonomy-images/region-syria.jpg?itok=qxfNiu14"/>
              <img style={imgStyle} src="https://static1.squarespace.com/static/55b94057e4b0d0f8999a41f8/57126c1927d4bdbd04e0bb86/58b3620bf7d1ff7aff6ff300/1488151058766/?format=750w"/>
              <img style={imgStyle} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1002638_10151805886217862_1791576482_n.jpg?oh=52b0ed5ee4dc96d3addd685ffcb028a5&oe=59650543"/>
           </div>

        </main>

        <footer>
            <div style={footStyle}>
            <Link style={linkStyle} to= '/thought'>Thought </Link>
            <Link style={linkStyle} to= '/'> Home </Link>
            <Link style={linkStyle} to= '/culture'>Culture </Link>
            <Link style={linkStyle} to= '/shop'>Shop </Link>
            </div>
        </footer>

       </div>
     );
   }
  }
