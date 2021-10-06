  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCwNu-SKGArmKZYMCoPKNXbPSFyUN87ayQ",
    authDomain: "marioplan-f04a1.firebaseapp.com",
    databaseURL: "https://marioplan-f04a1.firebaseio.com",
    projectId: "marioplan-f04a1",
    storageBucket: "marioplan-f04a1.appspot.com",
    messagingSenderId: "809558678506",
    appId: "1:809558678506:web:33f1e2c93807ab2e4af093",
    measurementId: "G-87MF7G0EGL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true});

export default firebase;

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCwNu-SKGArmKZYMCoPKNXbPSFyUN87ayQ",
//     authDomain: "marioplan-f04a1.firebaseapp.com",
//     databaseURL: "https://marioplan-f04a1.firebaseio.com",
//     projectId: "marioplan-f04a1",
//     storageBucket: "marioplan-f04a1.appspot.com",
//     messagingSenderId: "809558678506",
//     appId: "1:809558678506:web:33f1e2c93807ab2e4af093",
//     measurementId: "G-87MF7G0EGL"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>