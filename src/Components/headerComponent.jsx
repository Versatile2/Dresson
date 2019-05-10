import React, { Component } from "react";
import style from "../assets/style/main.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${style.header} ${style.detailoutfit}`}>
        <div className={style.headerFlex}>
          <a href="/profilesettings">
            <img
              src={require("../assets/icones/userIcon.png")}
              alt="Go on the profile page"
            />
          </a>
          <img
            src={require("../assets/images/dressonLogo.png")}
            alt="logo ‘Dress On‘"
            className={style.headerLogo}
          />
          <a href="./notifications" className={style.notifHeaderLink}>
            <img
              src={require("../assets/icones/notification.png")}
              alt="See the Notifications"
            />
            <div className={style.notifRound}>1</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
