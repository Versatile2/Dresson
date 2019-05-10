import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
// props : text:string, href:string, isLight:boolean
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { text, href, isLight } = this.props;
    return (
      <div>
        <a href={href} className={isLight ? style.linkDetail : style.linkMore}>
          {text}
        </a>
      </div>
    );
  }
}

export default Button;
