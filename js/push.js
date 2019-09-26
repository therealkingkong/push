// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "--",
  authDomain: "push-e0c02.firebaseapp.com",
  databaseURL: "https://push-e0c02.firebaseio.com",
  projectId: "push-e0c02",
  storageBucket: "",
  messagingSenderId: "572888864837",
  appId: "1:572888864837:web:f031b37c199428c91fab2c",
  measurementId: "G-30NDF7FVTW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// function to updateCount
var push = document.getElementById('push');
push.addEventListener('click', function push() {

  var updateCount = firebase.database().ref('pushCount/count');
  updateCount.transaction(function(theCount) {

        console.log(theCount);
        return theCount + 1;
    });

  updatePusher();


  // var updatePusher.firebase.database().ref('pushCount/pusher');


}, false);

// function to getIP address
function getIp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.ipify.org/?format=json', true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      console.log(data.ip);
      return data.ip;
    } else {
      // We reached our target server, but it returned an error
      console.log("error");
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();
}

function updatePusher() {
  var pushCountpusher = firebase.database().ref('pushCount/pushers');
  pushCountpusher.transaction(function(currentData) {
    var value = getIp();
    if (currentData === null) {
      return { pusher: value  };
    } else {
      console.log('already in here");
      return; // Abort the transaction.
    }
  }, function(error, committed, snapshot) {
    if (error) {
      console.log('Transaction failed abnormally!', error);
    } else if (!committed) {
      console.log('We aborted the transaction (because ada already exists).');
    } else {
      console.log('User ada added!');
    }
    console.log("Ada's data: ", snapshot.val());
  });
}
