const firebaseConfig = {
    apiKey: "AIzaSyChIlX4ZCNSchQLyDHnl08up4v0l5gN9zo",
    authDomain: "c94-project-70fc0.firebaseapp.com",
    projectId: "c94-project-70fc0",
    storageBucket: "c94-project-70fc0.appspot.com",
    messagingSenderId: "1057284250695",
    appId: "1:1057284250695:web:24f02b756ef36a08c26562",
    measurementId: "G-KEFRFJVQ9D"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function adduser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
}    