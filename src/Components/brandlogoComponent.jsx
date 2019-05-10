import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
//props: href:string, img:string

class BrandLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { href, img } = this.props;
    return (
      <div>
        <a href={href}>
          <img
            src={require(`../assets/images/${img}`)}
            alt=""
            className={style.brandImg}
          />
        </a>
      </div>
    );
  }
}

export default BrandLogo;
