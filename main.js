const firebaseConfig = {
  apiKey: "AIzaSyAYnWDG8_q1XGELrjxhWznEItDVsU8Knq0",
  authDomain: "quiz-ball.firebaseapp.com",
  databaseURL: "https://quiz-ball.firebaseio.com",
  projectId: "quiz-ball",
  storageBucket: "quiz-ball.appspot.com",
  messagingSenderId: "574301705322",
  appId: "1:574301705322:web:89936cca660370ffe02613",
  measurementId: "G-SXPFWLY417"
};

//firebase.initializeApp(firebaseConfig);

const signoutForm = document.querySelector('#signout-form');
signoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  // const email = signupForm['signup-email'].value;
  // const password = signupForm['signup-password'].value;
  

  // sign up the user
  firebase.auth().signOut().then(function() {
    window.location("index.html")
  }).catch(function(error) {
    // An error happened.
  });
   
});

// const user = firebase.auth().currentUser;

// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {

//     window.location="index.html";
  
// });
