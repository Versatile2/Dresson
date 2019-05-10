import React, { Component } from "react";
//import style from "../assets/style/main.module.scss";
// props: img:string, alt:string, brand
class OneItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      img,
      alt,
      name,
      classnameImg,
      classnameDiv,
      classname
    } = this.props;
    return (
      <React.Fragment>
        <img src={img} alt={alt} className={classnameImg} />
        <div className={classnameDiv} />
        <p className={classname}>{name}</p>
      </React.Fragment>
    );
  }
}

export default OneItem;
