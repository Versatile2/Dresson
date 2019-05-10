import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.pictureTitle}>Picture</h1>
        <p className={style.pictureText}>
          Take a picture of your outfit. Try to be in a good light with a plain
          background.
        </p>
        <Image
          img={require("../assets/images/chemise.jpeg")}
          alt=""
          className={style.pictureImgItem}
        />
        <a href="/" className={style.pictureLink}>
          <Image
            alt=""
            img={require("../assets/icones/camera.svg")}
            className={style.pictureIcon}
          />
        </a>
      </div>
    );
  }
}

export default Picture;
