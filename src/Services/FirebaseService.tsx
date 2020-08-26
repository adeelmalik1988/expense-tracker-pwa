import firebase from 'firebase'



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
  const messaging = firebase.messaging()



export const initNotification = ()=> {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
                
                console.log(currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})
}