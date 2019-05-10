import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Search from "../Components/search";
import Category from "../Components/category";
import OneItem from "../Components/oneItem";
import Button from "../Components/button";
import Image from "../Components/image";

class BrandDetailTops extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.brandtwoTitle}>H&M</h1>
        <Search
          forLabel="brand"
          id="brand"
          label="Search Items"
          name="brand"
          placeholder="Ex: Long sleeves blouse"
          icon="search.svg"
          alt="/"
        />
        <div className={style.brandtwoCat}>
          <Category href="/branddetailall" text="All" isActive={false} />
          <Category href="/" text="Tops" isActive={true} />
          <Category href="/branddetailpants" text="Pants" isActive={false} />
          <Category href="" text="Skirts" isActive={false} />
        </div>
        <div className={style.brandtwoFlex}>
          <div className={style.brandtwoContent}>
            <OneItem
              img={require("../assets/images/chemise.jpeg")}
              alt=""
              name="Long Sleeves Blouse"
              classname={style.brandtwoText}
            />
            <Image
              img={require("../assets/icones/minus.svg")}
              alt=""
              classname={style.contentImgIcone}
            />
            <Button text="Details" href="" isLight={true} />
          </div>
          <div className={style.brandtwoContent}>
            <OneItem
              img={require("../assets/images/top.jpeg")}
              alt=""
              name="Long Sleeves Blouse"
              classname={style.brandtwoText}
            />
            <Image
              img={require("../assets/icones/plus.svg")}
              alt=""
              classname={style.contentImgIcone}
            />
            <Button text="Details" href="" isLight={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default BrandDetailTops;
