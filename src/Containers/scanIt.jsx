import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
//import Button from "../Components/button";

class ScanIt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.scanItTitle}>Scan</h1>
        <h2 className={style.scanItSectitle}>Your scanned item</h2>
        <Image
          alt=""
          className={style.scanItImg}
          img={require("../assets/images/chemise.jpeg")}
        />
        <div>
          <ul className={style.scanItList}>
            <li className={style.scanItListem}>Brand : H&M</li>
            <li className={style.scanItListem}>Category : Pant</li>
            <li className={style.scanItListem}>Size : 38</li>
            <li className={style.scanItListem}>Color : Beige</li>
            <li className={style.scanItListem}>Price : 29.99€</li>
          </ul>
          <a href="/" className={style.scanItLink}>
            Add to dressing
          </a>
        </div>
      </div>
    );
  }
}

export default ScanIt;
