import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Search from "../Components/search";
import UserAction from "../Components/userActionComponent";

class SearchOutfitters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.searchouterTitle}>Search Outfitters</h1>
        <Search
          forLabel="outfit"
          id="outfit"
          label="Search Outfitters"
          name="outfit"
          placeholder="Outfitter's name or Pseudo"
          icon="search.svg"
          alt="/"
        />
        <p className={style.searchouterText}>
          Search a person who use the Dress On app. Put the person's pseudo or
          email address into the search input.
        </p>
        <UserAction
          img="jessUser.png"
          alt="/"
          name="Jessica André"
          href=""
          removeIcon={true}
          actionText="Remove Friend"
        />
        <UserAction
          img="juUser.png"
          alt="/"
          name="Julie Toussaint"
          href=""
          removeIcon={false}
          actionText="Add Friend"
        />
        <UserAction
          img="jessUser.png"
          alt="/"
          name="Jessica André"
          href=""
          removeIcon={false}
          actionText="Remove Friend"
        />
        <UserAction
          img="juUser.png"
          alt="/"
          name="Julie Toussaint"
          href=""
          removeIcon={true}
          actionText="Add Friend"
        />
        {/* Notice: If add friend can't see the dressing */}
      </div>
    );
  }
}

export default SearchOutfitters;
