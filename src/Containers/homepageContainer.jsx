import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
import Image from "../Components/image";
import RoundButton from "../Components/roundButton";
import Button from "../Components/button";
import Heart from "../Components/heart";
import UserService from "../Services/userService";
//import { userInfo } from "os";
import OutfitService from "../Services/outfitService";

class Homepage extends Component {
  userService = new UserService();
  outfitService = new OutfitService();
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      userFav: [],
      friendFav: []
    };
  }

  componentDidMount() {
    this.userService.getCurrentUserData().then(result => {
      this.setState({ currentUser: result });
    });
    this.userService.getFavOutfits().then(result => {
      this.setState({ userFav: result });
    });
    this.outfitService.getFriendFavOutfit().then(result => {
      this.setState({ friendFav: result });
    });
  }

  renderFetch() {
    return <div />;
  }

  render() {
    return this.state.currentUser ? this.renderContent() : this.renderFetch();
  }
  renderContent() {
    const { currentUser, friendFav, userFav } = this.state;
    return (
      <div>
        <img
          src={require("../assets/images/profil.png")}
          alt=""
          className={style.homepageProfileImg}
          width="600"
          height="400"
        />
        <h1 className={style.homepageTitleMain}>
          Welcome {currentUser.pseudo}
        </h1>
        <h2 className={style.homepageTitleSecond}>My favorite outfits</h2>
        <div className={style.sliderContent}>
          {userFav.map(outfit => {
            return (
              <div className={`${style.homepageItemFlex} ${style.firstImg}`}>
                <Image
                  alt="/"
                  img={outfit.images[0]}
                  className={style.homepageImg}
                />
                <Image
                  alt="/"
                  img={outfit.images[1]}
                  className={style.homepageImg}
                />
                <Heart />
              </div>
            );
          })}
        </div>

        <Button text="Details" href="/detailoutfit" isLight={true} />
        <Button text="See More" href="" isLight={false} />
        <h2 className={style.homepageTitleSecond}>
          My favorite friends' outfits
        </h2>
        <div className={style.sliderContent}>
          {friendFav.map(outfit => {
            return (
              <div className={`${style.homepageItemFlex} ${style.firstImg}`}>
                <Image
                  alt="/"
                  img={outfit.images[0]}
                  className={style.homepageImg}
                />
                <Image
                  alt="/"
                  img={outfit.images[1]}
                  className={style.homepageImg}
                />
                <Heart />
              </div>
            );
          })}
        </div>
        <Button text="Details" href="" isLight={true} />
        <Button text="See More" href="" isLight={false} />
        <div className={style.homepageButton}>
          <div className={style.homepageInvite}>
            <RoundButton
              text="Invite Outfitters"
              icon="userIconWhite.svg"
              href=""
            />
          </div>
          <div className={style.homepageSearch}>
            <RoundButton
              text="Search Outfitters"
              icon="search.svg"
              href="/searchoutfitters"
            />
          </div>
          <div className={style.homepageFriend}>
            <RoundButton
              text="See my Outfitters"
              icon="friends.svg"
              href="/searchfriends"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
