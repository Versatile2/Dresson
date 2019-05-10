import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className={style.nav}>
          <NavLink exact to="/" className={style.navDresson}>
            DressOn
          </NavLink>
          <NavLink to="/brands" className={style.navBrands}>
            Brands
          </NavLink>
          <NavLink to="/scan" className={style.navScan}>
            Scan
          </NavLink>
          <NavLink to="/favorites" className={style.navFav}>
            Favorite
          </NavLink>
          <NavLink to="/outfits" className={style.navOutfit}>
            Outfits
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Footer;
