import React, { Component } from "react";
import InputLabel from "../Components/inputLabel";
import style from "../assets/style/main.module.scss";
import firebase from "firebase";
const INITIAL_STATE = {
  name: "",
  lastname: "",
  pseudo: "",
  email: "",
  password: "",
  error: null
};

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <h1 className={style.signUpTitle}>Sign Up</h1>
        <FirebaseContext.Consumer>
          {firebase => <SignUp firebase={firebase} />}
        </FirebaseContext.Consumer>
        <form onSubmit={this.onSubmit}>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="name"
              classNameLabel={style.formLabel}
              label="Name"
              type="text"
              id="name"
              name="name"
              classNameInput={style.formInput}
              value={name}
            />
          </div>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="lastName"
              classNameLabel={style.formLabel}
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              classNameInput={style.formInput}
              value={lastname}
            />
          </div>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="pseudo"
              classNameLabel={style.formLabel}
              label="Pseudo"
              type="text"
              id="pseudo"
              name="pseudo"
              classNameInput={style.formInput}
              value={pseudo}
              onChange={this.onChange}
            />
          </div>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="email"
              classNameLabel={style.formLabel}
              label="E-mail"
              type="text"
              id="email"
              name="email"
              classNameInput={style.formInput}
              value={email}
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
              value={password}
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            disabled={isInvalid}
            className={style.formButton}
          />
          {error && <p>{error.message}</p>}
        </form>
       */}
      </div>
    );
  }
}

export default SignUp;
