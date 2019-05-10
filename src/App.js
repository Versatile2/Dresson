import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import style from "./assets/style/main.module.scss";
import Footer from "./Components/footerComponent";
import Homepage from "./Containers/homepageContainer";
import Brands from "./Containers/brandsContainer";
import Scan from "./Containers/scanContainer";
import Favorites from "./Containers/favoritesContainer";
import Outfits from "./Containers/outfitsContainer";
import Header from "./Components/headerComponent";
import Image from "./Components/image";
import SearchOutfitters from "./Containers/searchOutfittersContainer";
import SearchFriends from "./Containers/searchFriendContainer";
import DetailOutfit from "./Containers/detailOutfitContainer";
import CreateOutfit from "./Containers/createOutfitContainer";
import FriendFav from "./Containers/friendFavContainer";
import BrandDetailAll from "./Containers/brandDetailAllContainer";
import BrandDetailTops from "./Containers/brandDetailTopsContainer";
import BrandDetailPants from "./Containers/brandDetailPantsContainer";
import Notifications from "./Containers/notificationsContainer";
import FriendDressing from "./Containers/friendDressingContainer";
import ProfileSettings from "./Containers/profileSettingsContainer";
import Start from "./Containers/startContainer";
import SignIn from "./Containers/signIn";
import SignUp from "./Containers/signUp";
import DetailItem from "./Containers/detailItemContainer";
import ScanIt from "./Containers/scanIt";
import Picture from "./Containers/pictureContainer";
import PictureIn from "./Containers/pictureInContainer";
//ALEX
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "./Components/Firebase/firebase";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  renderSignInNull() {
    return (
      <div>
        <button
          onClick={() => {
            firebase
              .auth()
              .signInWithEmailAndPassword("test@test.be", "test@test.be");
          }}
        >
          Test
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          out
        </button>
      </div>
    );
  }

  renderSignIn(firebase) {
    return (
      <React.Fragment>
        <div className={style.headerBgc}>
          <Image
            img={require("./assets/images/logo.png")}
            alt=""
            className={style.signUpLogo}
          />
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/start" component={Start} />
            <Route
              path="/"
              exact
              component={SignIn}
              props={{ firebase: firebase }}
            />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  renderApp() {
    return (
      <React.Fragment>
        <div className={style.App}>
          <Header />
          <BrowserRouter>
            <Switch>
              {/* <Route path="/" exact component={Homepage} />
              <Route path="/brands" component={Brands} />
              <Route path="/scan" component={Scan} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/outfits" component={Outfits} />
              <Route path="/searchoutfitters" component={SearchOutfitters} />
              <Route path="/searchfriends" component={SearchFriends} />
              <Route path="/detailoutfit" component={DetailOutfit} />
              <Route path="/createoutfit" component={CreateOutfit} />
              <Route path="/friendfav" component={FriendFav} />
              <Route path="/branddetailall" component={BrandDetailAll} />
              <Route path="/branddetailtops" component={BrandDetailTops} />
              <Route path="/branddetailpants" component={BrandDetailPants} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/frienddressing" component={FriendDressing} />
              <Route path="/profilesettings" component={ProfileSettings} />
              <Route path="/detailitem" component={DetailItem} />
              <Route path="/scanit" component={ScanIt} />
              <Route path="/picture" component={Picture} />
              <Route path="/pictureIn" component={PictureIn} /> */}
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user }) => {
            return isSignedIn === false
              ? this.renderSignIn(firebase)
              : this.renderApp();
          }}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
    );
  }
}

export default App;
