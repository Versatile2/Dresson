import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
//props: href:string,text:string, isActive:boolean
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { href, text, isActive } = this.props;
    return (
      <div>
        <a href={href} className={isActive ? style.catFull : style.catEmpty}>
          {text}
        </a>
      </div>
    );
  }
}

export default Category;
