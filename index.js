//var firebaseRef 
// const firebaseConfig = {
//   apiKey: "AIzaSyAYnWDG8_q1XGELrjxhWznEItDVsU8Knq0",
//   authDomain: "quiz-ball.firebaseapp.com",
//   databaseURL: "https://quiz-ball.firebaseio.com",
//   projectId: "quiz-ball",
//   storageBucket: "quiz-ball.appspot.com",
//   messagingSenderId: "574301705322",
//   appId: "1:574301705322:web:89936cca660370ffe02613",
//   measurementId: "G-SXPFWLY417"
// };
// firebase.initializeApp(firebaseConfig);

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  

  // sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
    return firebase.db.collection('users').doc(cred.user.uid).set({
      score: 0
    });
  }).then(() => {
    window.location ="main.html";
  
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
    // ...
  });
});

// auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;



  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  
        .then(result =>{
        const user = result.user;
        console.log(user)
        window.location ="main.html";
    
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });


  

}



document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

            .then(result =>{
                const user = result.user;
                console.log(user)
                window.location ="main.html";
                
            })
            .catch(console.log)
}

