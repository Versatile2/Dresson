import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import { Link } from "react-router-dom";
//props: icon:string, text:string, href:string
class RoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { icon, text, href } = this.props;
    return (
      <div>
        <Link to={href} className={style.homepageRoundButtonLink}>
          <img src={require(`../assets/icones/${icon}`)} alt="" />
          <span className={style.homepageRoundButtonText}>{text}</span>
        </Link>
      </div>
    );
  }
}

export default RoundButton;
