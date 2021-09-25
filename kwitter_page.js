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
        room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val();
       if(childKey != "purpose") {
            
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id );
        console.log(message_data);
        name=message_data['name'];
        message=message_data['message'];
        
        like=message_data['like'];
        console.log("like="+like);
        name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
        msg_tag="<h4 class='message_h4'>"+message+"</h4>";
        like_button="<button class'btn btn-warning' id= "+firebase_message_id+" onclick='updatelike(this.id)' value= "+like+">";
        span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
        row=name_tag+msg_tag+like_button+span_tag;
        document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}