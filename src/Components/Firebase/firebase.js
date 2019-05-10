import app from "firebase";
import "firebase/auth";

export const config = {
  apiKey: "AIzaSyB8vlbLTCdHriITG3dRjOzly_8wTO2aFnc",
  authDomain: "dresson-12d37.firebaseapp.com",
  databaseURL: "https://dresson-12d37.firebaseio.com",
  projectId: "dresson-12d37",
  storageBucket: "dresson-12d37.appspot.com",
  messagingSenderId: "805328179984",
  appId: "1:805328179984:web:93a74c95a2019f5d"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
