import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Category from "../Components/category";
import OutfitFriendFav from "../Components/outfitFriendfav";
import Button from "../Components/button";

class FriendFav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.friendfavTitle}>Favorites</h1>
        <div className={style.friendfavCat}>
          <Category href="/favorites" text="My Favorites" isActive={false} />
          <Category href="/" text="Friends Favorites" isActive={true} />
        </div>
        <div className={style.friendfavContent}>
          <OutfitFriendFav
            img={require("../assets/images/jessUser.png")}
            alt=""
            name="Pasqui28"
          />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.friendfavContent}>
          <OutfitFriendFav
            img={require("../assets/images/juUser.png")}
            alt=""
            name="Jess04"
          />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.friendfavContent}>
          <OutfitFriendFav
            img={require("../assets/images/jessUser.png")}
            alt=""
            name="Pasqui28"
          />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.friendfavContent}>
          <OutfitFriendFav
            img={require("../assets/images/juUser.png")}
            alt=""
            name="Julie11"
          />
        </div>
        <Button text="Details" href="" isLight={true} />
      </div>
    );
  }
}

export default FriendFav;
