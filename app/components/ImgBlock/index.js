/**
*
* ImgBlock
*
*/

import React from 'react';

class ImgBlock extends React.PureComponent {
  constructor(props){
    super(props);
  }

  render() {

    const img={
      width:"100%",
      height:"100%",
      borderRadius:"25px",
      overflow:"hidden",

    }

    

    return (
      <div style={this.props.imgStyle}>
        <img style={img} src={this.props.imgSource}/>
        <div style={this.props.textStyle}>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default ImgBlock;
