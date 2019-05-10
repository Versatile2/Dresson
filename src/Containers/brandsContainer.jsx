import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import BrandLogo from "../Components/brandlogoComponent";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.brandTitle}>Brands</h1>
        <div className={style.brandFlex}>
          <BrandLogo href="" img="adidas2.jpg" />
          <BrandLogo href="" img="bershka.jpg" />
          <BrandLogo href="" img="booho.png" />
          <BrandLogo href="" img="ca.png" />
          <BrandLogo href="/branddetailAll" img="hm1.png" />
          <BrandLogo href="" img="jules.png" />
          <BrandLogo href="" img="lacoste.jpg" />
          <BrandLogo href="" img="pimkie.jpg" />
          <BrandLogo href="" img="promod.jpg" />
          <BrandLogo href="" img="pullbear.png" />
          <BrandLogo href="" img="Zara.jpg" />
        </div>
      </div>
    );
  }
}

export default Brands;
