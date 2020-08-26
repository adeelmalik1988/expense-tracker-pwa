importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyAx2SdG0yT4Low6DkUnfnnZEaV8t3qdqPs",
    authDomain: "expense-tracker-74b33.firebaseapp.com",
    databaseURL: "https://expense-tracker-74b33.firebaseio.com",
    projectId: "expense-tracker-74b33",
    storageBucket: "expense-tracker-74b33.appspot.com",
    messagingSenderId: "742762712429",
    appId: "1:742762712429:web:ac566d6ad062af90f95e64"
  };


  firebase.initializeApp(firebaseConfig);

  firebase.messaging();