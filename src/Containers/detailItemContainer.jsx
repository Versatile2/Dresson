import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import Action from "../Components/actions";
import Button from "../Components/button";

class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.detailItemDiv}>
        <h1 className={style.detailItemTitle}>
          H&M, Long sleeves blouse
          <span className={style.detailItemTitlePrice}>39,95€</span>
        </h1>
        <Image
          alt=""
          img={require("../assets/images/chemise.jpeg")}
          className={style.detailItemTop}
        />
        <div className={style.detailItemCat}>
          <ul className={style.detailItemList}>
            <li className={style.detailItemItem}>Category : Pants</li>
            <li className={style.detailItemItem}>Size : Medium</li>
            <li className={style.detailItemItem}>Color : Green</li>
            <li className={style.detailItemItem}>Ref : 4886/051</li>
          </ul>
        </div>
        <div>
          <p className={style.detailItemDescription}>
            Flowing blouse with a stand-up collar and long sleeves. Flying on
            the front. Asymmetrical bottom with side slits. Button closure on
            the front.
          </p>
        </div>
        <div className={style.detailItemEdit}>
          <Action
            href=""
            className={style.detailItemRemove}
            text="Remove from outfit"
          />
          <Action
            href=""
            className={style.detailItemShare}
            text="Share on Facebook"
          />
          <Action
            href=""
            className={style.detailItemDelete}
            text="Delete item"
          />
        </div>
        <div className={style.detailItemUsed}>
          <h3 className={style.detailItemTitle}>Used in this item</h3>
          <div className={style.detailItemOutfit}>
            <Image
              alt=""
              className={style.detailItemChemise}
              img={require("../assets/images/chemise.jpeg")}
            />
            <Image
              alt=""
              className={style.detailItemPant}
              img={require("../assets/images/pant.jpeg")}
            />
          </div>
          <Button text="Details" href="" isLight={true} />
        </div>
      </div>
    );
  }
}

export default DetailItem;
