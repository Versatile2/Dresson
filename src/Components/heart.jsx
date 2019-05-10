import React, { Component } from "react";
import style from "../assets/style/main.module.scss";

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.heartContentIcone}>
        <img
          src={require("../assets/icones/blueHeart.svg")}
          alt=""
          className={style.heartImgIcone}
        />
      </div>
    );
  }
}

export default Heart;
