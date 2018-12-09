import Rebase from "re-base";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB82bOnfc5ZCQ4PcXYa0ubNfE29jkfCosA",
  authDomain: "re-fund.firebaseapp.com",
  databaseURL: "https://re-fund.firebaseio.com",
  projectId: "re-fund",
  storageBucket: "re-fund.appspot.com",
  messagingSenderId: "542381050850"
};

const Firebase = firebase.initializeApp(config);
const base = Rebase.createClass(Firebase.database());

export { Firebase, base };
