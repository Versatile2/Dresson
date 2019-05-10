import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import LikesFriends from "../Components/likesFriends";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.notifTitle}>Notifications</h1>
        <div class={style.notifContent}>
          <ul>
            <LikesFriends text="Jess04 likes your outfit" />
            <LikesFriends text="Pasqui28 likes your outfit" />
            <LikesFriends text="Julie11 likes your outfit" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Notifications;
