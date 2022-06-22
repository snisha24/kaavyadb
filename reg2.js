
var firebaseConfig = {
    apiKey: "AIzaSyAm8uBsg7e8fHMWDLBYDr2DBMdKnfJPqnM",
    authDomain: "testdatabase-f81b8.firebaseapp.com",
    databaseURL: "https://testdatabase-f81b8-default-rtdb.firebaseio.com",
    projectId: "testdatabase-f81b8",
    storageBucket: "testdatabase-f81b8.appspot.com",
    messagingSenderId: "633996813737",
    appId: "1:633996813737:web:11820a943de6a9779f10b8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser()
  {
    user_name = document.getElementById("nameofuser").value;
    email = document.getElementById("email").value;
    phone= document.getElementById("phone").value;
    firebase.database().ref("/").child(user_name).update({
      email:email,
      phone: phone
    });
    
   
  }

  function back()
  {
    window.location="index.html";
  }