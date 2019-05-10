import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../assets/style/main.module.scss";
import Category from "../Components/category";
import Image from "../Components/image";
import Actions from "../Components/actions";

class DetailOutfit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to="" className={style.detailOutfitReturn}>
          <h1 className={style.detailOutfitTitle}>Outfits</h1>
        </Link>
        <div className={style.detailOutfitCat}>
          <Category href="" text="Create outfits" isActive={false} />
          <Category href="" text="My outfit" isActive={true} />
        </div>
        <div className={style.detailOutfitContent}>
          <div>
            <Image
              img={require("../assets/images/chemise.jpeg")}
              alt=""
              className={style.detailOutfitImg}
            />
            <p className={style.detailOutfitInfo}>
              H&M, Top, Medium, Black, 19,99€
            </p>
          </div>
          <div>
            <Image
              img={require("../assets/images/pant.jpeg")}
              alt=""
              className={style.detailOutfitImg}
            />
            <p className={style.detailOutfitInfo}>
              Zara, Pant, 38, Leopard, 29,99€
            </p>
          </div>
        </div>
        <div>
          <p className={style.detailOutfitLike}>
            Liked by Pasqui28, Margo08, Julie11
          </p>
        </div>
        <div>
          <p className={style.detailOutfitText}>
            I create this outfit for a friend's party. It's casual and simple.
            The main and original item in the outfit it's the pant.
          </p>
        </div>
        <div className={style.detailOutfitEditButton}>
          <Actions
            href="/"
            className={style.detailOutfitEdit}
            text="Edit this outfit"
          />
          <Actions
            href="/"
            className={style.detailOutfitDelete}
            text="Delete this outfit"
          />
          <Actions
            href="/"
            className={style.detailOutfitFav}
            text="Add this outfit to favorite"
          />
          <Actions
            href="/"
            className={style.detailOutfitFb}
            text="Share this outfit on Facebook"
          />
        </div>
      </div>
    );
  }
}

export default DetailOutfit;
