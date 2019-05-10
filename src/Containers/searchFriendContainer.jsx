import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Search from "../Components/search";
import UserAction from "../Components/userActionComponent";

class SearchFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={style.searchfriendTitle}>Search friends</h1>
        <Search
          forLabel="outfit"
          id="outfit"
          label="Search Outfitters"
          name="outfit"
          placeholder="Friend name or Pseudo"
          icon="search.svg"
          alt="/"
        />
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
          name="Jessica André"
          href=""
          removeIcon={true}
          actionText="Remove Friend"
        />
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
          name="Jessica André"
          href=""
          removeIcon={true}
          actionText="Remove Friend"
        />
      </div>
    );
  }
}

export default SearchFriends;
