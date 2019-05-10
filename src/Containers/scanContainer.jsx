import React, { Component } from "react";
import style from "../assets/style/main.module.scss";

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.scanTitle}>Scan</h1>
        <p className={style.scanText}>
          If you want to put a cloth in your dressing room you have to scan the
          logo « dress on » on the back of the label’s cloth.
        </p>
        <div>
          <p className={style.scanText}>
            If your cloth doesn’t have a logo « Dress On » you can take a
            picture of your cloth.
          </p>
          <a href="/" className={style.scanPicture}>
            Take a picture
          </a>
        </div>
      </div>
    );
  }
}

export default Scan;
