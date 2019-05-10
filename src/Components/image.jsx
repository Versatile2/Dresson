import React, { Component } from "react";
//import style from "../assets/style/main.module.scss";
//props: img:string, alt:string, className:string
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { img, alt, className } = this.props;
    return (
      <React.Fragment>
        <img src={img} alt={alt} className={className} />
      </React.Fragment>
    );
  }
}

export default Image;
