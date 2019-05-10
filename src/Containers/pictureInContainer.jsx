import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import InputLabel from "../Components/inputLabel";

class PictureIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.picInTitle}>Picture</h1>
        <h2 className={style.picInTitleSec}>Your added item</h2>
        <Image
          alt=""
          img={require("../assets/images/top.jpeg")}
          className={style.picinImgItem}
        />
        <form action="">
          <div className={style.picInDivForm}>
            <InputLabel
              forLabel="brandlabel"
              classNameLabel={style.picInLabel}
              label="Brand"
              type="text"
              id="brandlabel"
              name="brandlabel"
              classNameInput={style.picInInput}
            />
          </div>
          <div className={style.picInDivForm}>
            <InputLabel
              forLabel="category"
              classNameLabel={style.picInLabel}
              label="Category"
              type="text"
              id="category"
              name="category"
              classNameInput={style.picInInput}
            />
          </div>
          <div className={style.picInDivForm}>
            <InputLabel
              forLabel="size"
              classNameLabel={style.picInLabel}
              label="Size"
              type="text"
              id="size"
              name="size"
              classNameInput={style.picInInput}
            />
          </div>
          <div className={style.picInDivForm}>
            <InputLabel
              forLabel="color"
              classNameLabel={style.picInLabel}
              label="Color"
              type="text"
              id="color"
              name="color"
              classNameInput={style.picInInput}
            />
          </div>
          <div className={style.picInDivForm}>
            <InputLabel
              forLabel="price"
              classNameLabel={style.picInLabel}
              label="Price"
              type="text"
              id="price"
              name="price"
              classNameInput={style.picInInput}
            />
          </div>
          <input
            type="submit"
            value="Add to dressing"
            className={style.picInSubmit}
          />
        </form>
      </div>
    );
  }
}

export default PictureIn;
