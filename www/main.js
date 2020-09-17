// This is a JavaScript file
function login(){
  var username = document.getElementById("username")
  var password = document.getElementById("password")
  alert(username.value)
  if(username.value === "hello"){
    alert(username.value)
  }
  if (username.value==="hello" && password.value==="ok"){
    ons.notification.alert("ok");
    var navigator = document.getElementById('navigator');
    navigator.resetToPage('shackleton.html');
  }
  else{ 
    console.log(username)
    ons.notification.alert("username")
  }

}
