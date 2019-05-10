import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import Button from "../Components/button";

class FriendDressing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.friendressInfo}>
        <Image
          img={require("../assets/images/jessUser.png")}
          alt=""
          className={style.friendressProfileImg}
        />
        <p className={style.friendressHeaderTitle}>
          Dressing room
          <span className={style.friendressHeaderTitleSpan}>Jessica André</span>
        </p>
        <h1 className={style.friendressTitle}>Friend's outfit</h1>
        <div className={style.friendressContent}>
          <div className={style.friendressImgFlex}>
            <Image
              alt=""
              img={require("../assets/images/chemise.jpeg")}
              className={style.friendressImgTop}
            />
            <Image
              alt=""
              img={require("../assets/images/pant.jpeg")}
              className={style.friendressImgPant}
            />
          </div>
          <Button text="Details" href="" isLight={true} />
          <div className={style.friendressImgFlex}>
            <Image
              alt=""
              img={require("../assets/images/top.jpeg")}
              className={style.friendressImgTop}
            />
            <Image
              alt=""
              img={require("../assets/images/pant3.jpeg")}
              className={style.friendressImgPant}
            />
          </div>
          <Button text="Details" href="" isLight={true} />
          <div className={style.friendressImgFlex}>
            <Image
              alt=""
              img={require("../assets/images/chemise.jpeg")}
              className={style.friendressImgTop}
            />
            <Image
              alt=""
              img={require("../assets/images/pant2.jpg")}
              className={style.friendressImgPant}
            />
          </div>
          <Button text="Details" href="" isLight={true} />
        </div>
      </div>
    );
  }
}

export default FriendDressing;
