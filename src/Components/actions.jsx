import React, { Component } from "react";
import { Link } from "react-router-dom";
//import style from "../assets/style/main.module.scss";
//props: href:string, className:string, text:string
class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { href, className, text } = this.props;
    return (
      <div>
        <Link to={href} className={className}>
          {text}
        </Link>
      </div>
    );
  }
}

export default Actions;
