import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWP9tlw5QB-92xlXBmkGBrRv7TqN1VdIY",
    authDomain: "complete-todo-app.firebaseapp.com",
    databaseURL: "https://complete-todo-app.firebaseio.com",
    storageBucket: "complete-todo-app.appspot.com",
    messagingSenderId: "104518798450"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: 1
  },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 40
    }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot)=>{
    console.log('new todo added', snapshot.key, snapshot.val());
  });

  var newTodoRef = todosRef.push({
    text: 'Work on website'
  });

  var newTodoRef = todosRef.push({
    text: 'Do meal prep'
  });
  // var notessRef = firebaseRef.child('notes');
  //
  // notessRef.on('child_added', (snapshot)=> {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  // notessRef.on('child_changed', (snapshot)=> {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  //
  // notessRef.on('child_removed', (snapshot)=> {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });
  //
  //
  // var newNoteRef = notessRef.push({
  //   text: 'Walk the dog!'
  // });
