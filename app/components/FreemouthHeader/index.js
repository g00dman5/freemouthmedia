/**
*
* FreemouthHeader
*
*/

import React from 'react';

class FreemouthHeader extends React.PureComponent {
  constructor(props){
    super(props);
  }


  render() {

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

    }

    const linkStyle={
      textDecoration:"none",
      color:"#0000ff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",

    }


    return (


      <div style={navStyle}>
        <Link style={linkStyle} to= '/thought'>Thought </Link>
        <Link style={linkStyle} to= '/'> Home </Link>
        <Link style={linkStyle} to= '/culture'>Culture </Link>
        <Link style={linkStyle} to= '/shop'>Shop </Link>
      </div>
    );
  }
}

export default FreemouthHeader;
