import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Search from "../Components/search";
import Category from "../Components/category";
import Button from "../Components/button";
import OneItem from "../Components/oneItem";

class CreateOutfit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.createoutfitTitle}>Outfits</h1>
        <Search
          forLabel="outfit"
          id="outfit"
          label="Search Items"
          name="outfit"
          placeholder="Search Item"
          icon="search.svg"
          alt="/"
        />
        <div className={style.createoutfitCat}>
          <Category href="" text="Create outfits" isActive={true} />
          <Category href="/outfits" text="My outfit" isActive={false} />
        </div>
        <p class={style.createoutfitText}>
          To create your outfit, you have to select two items in the list below.
          For validate your choice you need one top and one pant or skirt.
        </p>
        <div class={style.createoutfitFlex}>
          <div className={style.createoutfitContent}>
            <OneItem
              img={require("../assets/images/chemise.jpeg")}
              classnameImg={style.createoutfitTop}
              classnameDiv={style.contentImgBgcone}
              classname={style.createoutfitBrand}
              alt=""
              name="H&M"
            />
            <Button text="Details" href="" isLight={true} />
          </div>
          <div className={style.createoutfitContent}>
            <OneItem
              img={require("../assets/images/pant.jpeg")}
              classnameImg={style.createoutfitPant}
              classnameDiv={style.contentImgBgcone}
              classname={style.createoutfitBrand}
              alt=""
              name="Pimkie"
            />
            <Button text="Details" href="" isLight={true} />
          </div>
          <div className={style.createoutfitContent}>
            <OneItem
              img={require("../assets/images/top.jpeg")}
              classnameImg={style.createoutfitTop}
              classnameDiv={style.contentImgBgcone}
              classname={style.createoutfitBrand}
              alt=""
              name="Zara"
            />
            <Button text="Details" href="" isLight={true} />
          </div>
          <div className={style.createoutfitContent}>
            <OneItem
              img={require("../assets/images/chemise.jpeg")}
              classnameImg={style.createoutfitTop}
              classnameDiv={style.contentImgBgcone}
              classname={style.createoutfitBrand}
              alt=""
              name="Promod"
            />
            <Button text="Details" href="" isLight={true} />
          </div>
          <div className={style.createoutfitContent}>
            <OneItem
              img={require("../assets/images/pant3.jpeg")}
              classnameImg={style.createoutfitTop}
              classnameDiv={style.contentImgBgcone}
              classname={style.createoutfitBrand}
              alt=""
              name="Jules"
            />
            <Button text="Details" href="" isLight={true} />
          </div>
        </div>
        <form action="" className={style.createOutfitForm}>
          <input
            type="submit"
            value="Confirm your outfit"
            className={style.createOutfitSubmit}
          />
        </form>
      </div>
    );
  }
}

export default CreateOutfit;
