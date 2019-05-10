import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import InputLabel from "../Components/inputLabel";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit() {
    this.props.firebase
      .auth()
      .signInWithEmailAndPassword("test@test.be", "test@test.be");
  }
  render() {
    return (
      <div>
        <h1 className={style.signInTitle}>Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="email"
              classNameLabel={style.formLabel}
              label="E-mail"
              type="text"
              id="email"
              name="email"
              classNameInput={style.formInput}
            />
          </div>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="password"
              classNameLabel={style.formLabel}
              label="Password"
              type="password"
              id="password"
              name="password"
              classNameInput={style.formInput}
            />
          </div>
          <input type="submit" value="Sign In" className={style.formButton} />
        </form>
      </div>
    );
  }
}

export default SignIn;
