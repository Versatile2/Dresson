import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Category from "../Components/category";
import Image from "../Components/image";
import Button from "../Components/button";
import Heart from "../Components/heart";

class Outfits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1 className={style.myoutfitTitle}>Outfits</h1>
        <div className={style.detailOutfitCat}>
          <Category
            href="/createoutfit"
            isActive={false}
            text="Create Outfit"
          />
          <Category href="" isActive={true} text="My Outfit" />
        </div>
        <div className={style.myoutfitFlex}>
          <Image
            img={require("../assets/images/chemise.jpeg")}
            alt="/"
            className={style.myoutfitImg}
          />
          <Image
            img={require("../assets/images/pant.jpeg")}
            alt="/"
            className={style.myoutfitImg}
          />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.myoutfitFlex}>
          <Image img="top.jpeg" alt="/" className="myoutfitImg" />
          <Image img="pant2.jpg" alt="/" className="myoutfitImg" />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.myoutfitFlex}>
          <Image img="chemise.jpeg" alt="/" className="myoutfitImg" />
          <Image img="pant3.jpeg" alt="/" className="myoutfitImg" />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.myoutfitFlex}>
          <Image img="top.jpeg" alt="/" className="myoutfitImg" />
          <Image img="pant.jpeg" alt="/" className="myoutfitImg" />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
      </React.Fragment>
    );
  }
}

export default Outfits;
