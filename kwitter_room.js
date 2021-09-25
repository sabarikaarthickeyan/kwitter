
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6-nbF3BD7H9elu5TPkU19fNZJMHJBvE",
  authDomain: "kwitter-2e949.firebaseapp.com",
  databaseURL: "https://kwitter-2e949-default-rtdb.firebaseio.com",
  projectId: "kwitter-2e949",
  storageBucket: "kwitter-2e949.appspot.com",
  messagingSenderId: "249169579200",
  appId: "1:249169579200:web:e6efeef4be9aa28163f125"
};

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    console.log(user_name);

    function addroom(){
          room_name=document.getElementById("room_name").value;
          console.log(room_name);
          firebase.database().ref("/").child(room_name).update({
          Purpose:"adding_room"
          });
          localStorage.setItem("room_name",room_name);

          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id= "+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      console.log(Room_names);
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log("redierct1");
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      console.log("redirct");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}