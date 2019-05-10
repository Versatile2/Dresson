import React, { Component } from "react";
//import style from "../assets/style/main.module.scss";
//Props: forLabel:string, classNameLabel:string, label:string, type:string, id:string, name:string, classNameInput
class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      forLabel,
      classNameLabel,
      label,
      type,
      id,
      name,
      classNameInput
    } = this.props;
    return (
      <React.Fragment>
        <label for={forLabel} class={classNameLabel}>
          {label}
        </label>
        <input type={type} id={id} name={name} class={classNameInput} />
      </React.Fragment>
    );
  }
}

export default InputLabel;
