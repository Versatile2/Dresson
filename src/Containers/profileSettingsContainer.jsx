import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import InputLabel from "../Components/inputLabel";

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form action="" className={style.profileForm}>
          <label for="add" className={style.profileLabelPic}>
            <span className={style.profileSpanBarreVertical} />
            <span className={style.profileSpanBarreHorizontal} />
            <input
              type="file"
              id="add"
              name="add"
              className={style.profileInputPic}
            />
          </label>
          <p className={style.profileTextPic}>Add a picture</p>
        </form>
        <h1 className={style.profileTitle}>My profile setting</h1>
        <form action="" className={style.registerForm}>
          <div className={style.formFlex}>
            <InputLabel
              forLabel="name"
              classNameLabel={style.formLabel}
              label="Name"
              type="text"
              id="name"
              name="name"
              classNameInput={style.formInput}
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
          <input
            type="submit"
            value="Save changes"
            className={style.formButton}
          />
        </form>
        <a href="/" className={style.logoutButton}>
          Log out
        </a>
      </div>
    );
  }
}

export default ProfileSettings;
