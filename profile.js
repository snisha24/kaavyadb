var firebaseConfig = { apiKey: "AIzaSyAm8uBsg7e8fHMWDLBYDr2DBMdKnfJPqnM",
 authDomain: "testdatabase-f81b8.firebaseapp.com", 
 databaseURL: "https://testdatabase-f81b8-default-rtdb.firebaseio.com", 
 projectId: "testdatabase-f81b8", 
 storageBucket: "testdatabase-f81b8.appspot.com", 
 messagingSenderId: "633996813737", 
 appId: "1:633996813737:web:11820a943de6a9779f10b8" };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function show(){
    user1=localStorage.getItem("username");
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        ///document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val();
      username = childKey;
      message_data = childData;
      console.log(username);
      console.log(message_data);
if(username == user1){
      console.log("user Name - " + username);
      email = message_data['email'];
        phone = message_data['phone'];

        document.getElementById("user").innerHTML="username: "+username;
        document.getElementById("emailid").innerHTML="email: "+email;
        document.getElementById("phoneno").innerHTML="phone: "+phone;
}
    });
});

}