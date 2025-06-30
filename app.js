let socket = io("https://your-backend-url.onrender.com"); // Replace this URL later
let localVideo = document.getElementById("localVideo");
let remoteVideo = document.getElementById("remoteVideo");

function startChat() {
  document.getElementById("status").innerText = "Connecting...";
  alert("Start Chat clicked - backend logic coming soon!");
}

function nextStranger() {
  alert("Next clicked - backend logic coming soon!");
}

function goPremium() {
  alert("This will open Razorpay ₹1 payment (to be added)");
}
