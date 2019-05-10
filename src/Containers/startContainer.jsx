import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.start}>
        <div class="filter" />
        <header>
          <Image
            img={require("../assets/images/logo.png")}
            alt="Logo ‘Dress On‘"
            className={style.logoStart}
          />
        </header>
        <div className={style.buttonStart}>
          <a href="/signin" className={style.buttonBlue}>
            Sign In
          </a>
          <a href="/signup" className={style.buttonWhite}>
            Sign Up
          </a>
        </div>
      </div>
    );
  }
}

export default Start;
