var firebaseConfig = { apiKey: "AIzaSyAm8uBsg7e8fHMWDLBYDr2DBMdKnfJPqnM",
 authDomain: "testdatabase-f81b8.firebaseapp.com", 
 databaseURL: "https://testdatabase-f81b8-default-rtdb.firebaseio.com", 
 projectId: "testdatabase-f81b8", 
 storageBucket: "testdatabase-f81b8.appspot.com", 
 messagingSenderId: "633996813737", 
 appId: "1:633996813737:web:11820a943de6a9779f10b8" };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //firebase.initializeApp(firebaseConfig);

function login(){
  user_name= document.getElementById("namereg").value;
  console.log(user_name);
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("error_reg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  user = childKey; 
  console.log("First stage");
  if(user_name == user){
    localStorage.setItem("username",user_name);
//checkpwd();
window.location= "profile.html";

   // document.getElementById("error_reg").innerHTML= "Error! User already created with these details."
    console.log("Error");
  }
 // else{
 //   window.location= "reg.html";
   // firebase.database().ref("/").child(user_name).update({ purpose : "registering user" });
   // window.location="login.html";
 //   console.log("Successful");
//  }
  }); });
}

function reg(){

window.location= "reg.html";
}