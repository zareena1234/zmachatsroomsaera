  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAO9bvLC5ONFdoLe_-gIqhLQwgKfOEF8xE",
      authDomain: "kwitter-c6ae9.firebaseapp.com",
      databaseURL: "https://kwitter-c6ae9.firebaseio.com",
      projectId: "kwitter-c6ae9",
      storageBucket: "kwitter-c6ae9.appspot.com",
      messagingSenderId: "22922090759",
      appId: "1:22922090759:web:5b7f3d75f9519c90554da2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom ()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey
       console.log("roomname= "+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}