import firebase from "firebase";

var config = {
  apiKey: "AIzaSyC8_gbsHIZayxnAuHOk1HHAVMPdDK9cMyo",
  authDomain: "push-dash-d630e.firebaseapp.com",
  databaseURL: "https://push-dash-d630e.firebaseio.com",
  projectId: "push-dash-d630e",
  storageBucket: "push-dash-d630e.appspot.com",
  messagingSenderId: "579555292714",
  appId: "1:579555292714:web:76a3173595603f635fb553",
};
firebase.initializeApp(config);

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);


export default function getFeedsData() {
  return new Promise((resolve) => {
    db.collection("adds")
      .get()
      .then(function (querySnapshot) {
        let data = [];
        querySnapshot.forEach(function (doc) {
          data.push({ ...doc.data(), docId: doc.id });
        });
        resolve(data);
      });
  });
}

