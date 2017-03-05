import firebase from 'firebase';

// Initialize Firebase

try{
  var config = {
    apiKey: "AIzaSyAWP9tlw5QB-92xlXBmkGBrRv7TqN1VdIY",
    authDomain: "complete-todo-app.firebaseapp.com",
    databaseURL: "https://complete-todo-app.firebaseio.com",
    storageBucket: "complete-todo-app.appspot.com",
    messagingSenderId: "104518798450"
  };
  firebase.initializeApp(config);
}catch (e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
