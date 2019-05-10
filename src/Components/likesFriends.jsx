import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import Button from "../Components/button";
//props: text:string,
class LikesFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { text } = this.props;
    return (
      <div>
        <li className={style.notifListContent}>
          <div className={style.notifList}>
            <Image
              img={require("../assets/images/juUser.png")}
              alt=""
              className={style.notifImgUser}
            />
            <div className={style.notifHeart}>
              <Image
                img={require("../assets/icones/heart.svg")}
                alt=""
                className={style.notifHeartIcon}
              />
            </div>
            <p className={style.notifText}>{text}</p>
          </div>
          <Button text="See the outfit" href="" isLight={true} />
        </li>
      </div>
    );
  }
}

export default LikesFriends;
