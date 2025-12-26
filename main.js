import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_61hnnOHeblunIvsrIqg5zYBmnjn1JSw",
  authDomain: "makechat-225b9.firebaseapp.com",
  databaseURL: "https://makechat-225b9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "makechat-225b9",
  storageBucket: "makechat-225b9.firebasestorage.app",
  messagingSenderId: "403328988002",
  appId: "1:403328988002:web:c1442f25a420547f36f23b",
  measurementId: "G-6Z5TBEJTJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
console.log("이걸 봤다면 당신은 개발자입니다!")

const name1 = document.getElementById('name');
const text = document.getElementById('text');
const send = document.getElementById('send');
const chat = document.getElementById('chat');

const db = getDatabase(app);
const messagesref = ref(db,'messages');


function sende(){
  if (name1.value != ""&&text.value != "") {
    push(messagesref,{
      username:name1.value,
      message:text.value,
      timestamp: Date.now()
    });
    text.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
}
  onChildAdded(messagesref, (data) => {
    const msg = data.val();
    const p = document.createElement('p');
    p.textContent = `${msg.username} : ${msg.message}`;
    chat.appendChild(p);
  });


send.addEventListener('click',sende);
