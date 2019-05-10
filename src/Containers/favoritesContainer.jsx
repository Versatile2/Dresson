import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Category from "../Components/category";
import Image from "../Components/image";
import Button from "../Components/button";
import Heart from "../Components/heart";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.favoritesTitle}>Favorites</h1>
        <div className={style.favoritesCat}>
          <Category href="/" text="My Favorites" isActive={true} />
          <Category
            href="/friendfav"
            text="Friends Favorites"
            isActive={false}
          />
        </div>
        <div className={style.favoritesFlex}>
          <Image
            alt=""
            img={require("../assets/images/chemise.jpeg")}
            className={style.favoritesImg}
          />
          <Image
            alt=""
            img={require("../assets/images/pant3.jpeg")}
            className={style.favoritesImg}
          />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.favoritesFlex}>
          <Image
            alt=""
            img={require("../assets/images/top.jpeg")}
            className={style.favoritesImg}
          />
          <Image
            alt=""
            img={require("../assets/images/pant.jpeg")}
            className={style.favoritesImg}
          />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.favoritesFlex}>
          <Image alt="" img="chemise.jpeg" className={style.favoritesImg} />
          <Image alt="" img="pant.jpeg" className={style.favoritesImg} />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.favoritesFlex}>
          <Image alt="" img="top.jpeg" className={style.favoritesImg} />
          <Image alt="" img="pant2.jpg" className={style.favoritesImg} />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
        <div className={style.favoritesFlex}>
          <Image alt="" img="chemise.jpeg" className={style.favoritesImg} />
          <Image alt="" img="pant3.jpeg" className={style.favoritesImg} />
          <Heart />
        </div>
        <Button text="Details" href="" isLight={true} />
      </div>
    );
  }
}

export default Favorites;
