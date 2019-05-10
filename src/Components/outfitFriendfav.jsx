import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import Heart from "../Components/heart";
//props: img:string, altFriend:string, name:string
class OutfitFriendFav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { img, alt, name } = this.props;
    return (
      <React.Fragment>
        <div className={style.friendfavFriendFlex}>
          <img src={img} alt={alt} className={style.friendfavImgFriend} />
          <p className={style.friendfavNameFriend}>{name}</p>
        </div>
        <div className={style.friendfavFlex}>
          <Image
            alt="/"
            img={require("../assets/images/chemise.jpeg")}
            className={style.friendfavTop}
          />
          <Image
            alt="/"
            img={require("../assets/images/pant.jpeg")}
            className={style.friendfavPant}
          />
          <Heart />
        </div>
      </React.Fragment>
    );
  }
}

export default OutfitFriendFav;
