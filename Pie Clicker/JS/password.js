/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

if (localStorage.length == 0) {
  localStorage.setItem("passwordset", false);
}

function setpassword() {
  var var1 = localStorage.getItem("passwordset")
  if (var1 === false) {
    var answer = prompt("Set password to?");
    localStorage.setItem("password", answer);
    localStorage.setItem("passwordset", true);
    alert("Completed.");
  }
  else {
    var var2 = localStorage.getItem("password");
    alert("The system has detected that a password has been set.");
    var answer = prompt("Insert password to proceed.");
    alert("Correct.");
    var answer = prompt("Set password to?");
    localStorage.setItem("password", answer);
    localStorage.setItem("passwordset", true);
    alert("Completed.");
  }
}

function open() {
  var var1 = localStorage.getItem("passwordset");
  if (var1 === true) {
    var var2 = localStorage.getItem("password");
    alert("The system has detected that a password has been set.");
    var answer = prompt("Insert password.");
    if (answer == var2) {
      alert("Correct.");
      window.open("pieclicker.html", _self);
    }
    else {
      alert("Incorrect.");
    }
  }
  else {
    window.open("pieclicker", _self);
  }
}
