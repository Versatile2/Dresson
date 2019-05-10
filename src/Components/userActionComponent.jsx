import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Button from "../Components/button";
//props: img:string, alt:string, name:string, href:string, removeIcon:string, actionText:string
class UserAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { img, alt, name, href, removeIcon, actionText } = this.props;
    return (
      <div className={style.userAction}>
        <img
          src={require(`../assets/images/${img}`)}
          alt={alt}
          className={style.userActionImg}
        />
        <div class="userActionInfo">
          <p className={style.userActionName}>{name}</p>
          <Button
            text="See dressing"
            href=""
            isLight={true}
            className={style.userActionPadding}
          />
          <a
            href={href}
            className={
              removeIcon ? style.userActionIconRemove : style.userActionIconAdd
            }
          >
            {actionText}
          </a>
        </div>
      </div>
    );
  }
}

export default UserAction;
