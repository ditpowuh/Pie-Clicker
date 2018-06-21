/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

//Variable Start-Up\\

var pies = 0;
var ppc = 1;

var autosaver = false;

var bonus = 1;

var acu = 0;
var shopu = 0;
var factoryu = 0;

const acuprice = (acu + 1) * 10;
const shopuprice = (shopu + 1) * 100;
const factoryprice = (factoryu + 1) * 1000;

const pc = [
  "Q2UipC5c6l",
  "8zTWwwJed3"
];

var achievement1 = 0;
var achievement2 = 0;
var achievement3 = 0;
var achievement4 = 0;
var achievement5 = 0;
var achievement6 = 0;
var achievement7 = 0;

//Normal Start-Up\\

if (localStorage.length == 0) {
  localStorage.setItem("pieamount", 0);
  localStorage.setItem("upgrade1", 0);
  localStorage.setItem("upgrade2", 0);
  localStorage.setItem("upgrade3", 0);
  localStorage.setItem("upgradeppc", 1);
  alert("The system has detected that you are a new user!");
  alert("Welcome to Pie Clicker!");
  promotional_code();
}

document.getElementById("text").value = 0;

var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("bite");
var sound3 = document.getElementById("buy");
var sound4 = document.getElementById("sound2")

update();
sound1.play();

setInterval(timer, 1000);
setInterval(setrandombonus, 1000);
setInterval(bonus, 500 + Math.floor((Math.random() * 1000) + 1));

while (autosaver === true) {
  setInterval(save, 60000);
}



//Functions\\

function addpie() {
  pies = pies + ppc * bonus;
  update();
  sound2.play();
}

function bacu() {
  var calculations1 = acu + 1;
  var acuprice = calculations1 * 10;
  if (pies == acuprice || pies > acuprice) {
    pies = pies - acuprice;
    acu = acu + 1;
    sound3.play();
    update();
  }
  else {
    sound4.play();
    update();
  }
}

function bshopu() {
  var calculations2 = shopu + 1;
  var shopuprice = calculations2 * 100;
  if (pies == shopuprice || pies > shopuprice) {
    pies = pies - shopuprice;
    shopu = shopu + 1;
    sound3.play();
    update();
  }
  else {
    sound4.play();
    update();
  }
}

function bfactoryu() {
  if (pies == factoryprice || pies > factoryprice) {
    pies = pies - factoryprice;
    factoryu = factoryu + 1;
    sound3.play();
    update();
  }
  else {
    sound4.play();
    update();
  }
}

function bppc() {
  var ppcprice = ppc * 250;
  if (pies == ppcprice || pies > ppcprice) {
    pies = pies - ppcprice;
    ppc = ppc + 1;
    sound3.play();
    update();
  }
  else {
    sound4.play();
    update();
  }
}

function timer() {
  var calculations1 = acu * 1;
  var calculations2 = shopu * 5;
  var calculations3 = factoryu * 25;
  var completecalculations = calculations1 + calculations2 + calculations3;
  document.getElementById("pps").innerHTML = "You are earning " + completecalculations + " pies per second from the Upgrades."
  pies = pies + completecalculations;
  update();
}

function save() {
  localStorage.setItem("pieamount", pies);
  localStorage.setItem("upgrade1", acu);
  localStorage.setItem("upgrade2", shopu);
  localStorage.setItem("upgrade3", factoryu);
  localStorage.setItem("upgradeppc", ppc);
  sound1.play();
  document.getElementById("bonus").innerHTML = "1x (No Bonus)";
  document.getElementById("cancelbonus").innerHTML = "";
  bonus = 1;
  return;
}

function load() {
  pies = localStorage.getItem("pieamount");
  pies = parseInt(pies);
  acu = localStorage.getItem("upgrade1");
  acu = parseInt(acu);
  shopu = localStorage.getItem("upgrade2");
  shopu = parseInt(shopu);
  factoryu = localStorage.getItem("upgrade3");
  factoryu = parseInt(factoryu);
  ppc = localStorage.getItem("upgradeppc");
  ppc = parseInt(ppc);
  update();
  sound1.play();
  document.getElementById("bonus").innerHTML = "1x (No Bonus)";
  document.getElementById("cancelbonus").innerHTML = "";
  bonus = 1;
  return;
}

function reset() {
  var confirmation = confirm("Are you sure you want to reset your data?");
  if (confirmation == true) {
    localStorage.clear();
    localStorage.setItem("pieamount", 0);
    localStorage.setItem("upgrade1", 0);
    localStorage.setItem("upgrade2", 0);
    localStorage.setItem("upgrade3", 0);
    localStorage.setItem("upgradeppc", 1);
    alert("All data has been erased.")
    document.getElementById("bonus").innerHTML = "1x (No Bonus)";
    document.getElementById("cancelbonus").innerHTML = "";
    bonus = 1;
    return;
  }
}

function update() {
  var clickbonus = ppc * bonus;
  document.getElementById("text").value = pies;
  document.title = "Pie Clicker: " + pies + " Pies";
  document.getElementById("texttitle").innerHTML = "Pie Clicker: " + pies + " Pies";
  document.getElementById("acuamount").innerHTML = "(" + acu + ")" + " Normal Auto Clicker (Customers):";
  document.getElementById("shopuamount").innerHTML = "(" + shopu + ")" + " Big Auto Clicker (Shops):";
  document.getElementById("factoryuamount").innerHTML = "(" + factoryu + ")" + " Huge Auto Clicker (Factories):";
  document.getElementById("pmtamount").innerHTML = "(" + (ppc - 1) + ")" + " Higher Pies Per Click (Pie-Making Tools)";
  document.getElementById("ppc").innerHTML = "You are earning " + clickbonus + " pies per click.";
}

function setrandombonus() {
  var chances = Math.floor((Math.random() * 15) + 1);
  if (chances == 1) {
    var random = Math.floor((Math.random() * 10) + 1);
    if (random == 1 || random == 2 || random == 3 || random == 4) {
      document.getElementById("bonus").innerHTML = "1x (No Bonus)";
      document.getElementById("cancelbonus").innerHTML = "";
    }
    else if (random == 5 || random == 6 || random == 7) {
      document.getElementById("bonus").innerHTML = "!2X BONUS FOR 45 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      bonus = 2;
      return;
    }
    else if (random == 8 || random == 9) {
      document.getElementById("bonus").innerHTML = "!3X BONUS FOR 30 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      bonus = 3;
      return;
    }
    else if (random == 10) {
      document.getElementById("bonus").innerHTML = "!4X BONUS FOR 15 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      bonus = 4;
      return;
    }
  }
}

function bonus() {
  if (bonus != 1) {
    var time = 0;
    if (bonus == 2) {
      document.getElementById("bonus").innerHTML = "!4X BONUS FOR 15 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      time++;
      if (time == 45) {
        document.getElementById("cancelbonus").innerHTML = "";
        document.getElementById("bonus").innerHTML = "1x (No Bonus)";
        bonus = 1;
        return;
      }
    }
    else if (bonus == 3) {
      document.getElementById("bonus").innerHTML = "!3X BONUS FOR 30 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      time++;
      if (time == 30) {
        document.getElementById("cancelbonus").innerHTML = "";
        document.getElementById("bonus").innerHTML = "1x (No Bonus)";
        bonus = 1;
        return;
      }
    }
    else if (bonus == 4) {
      document.getElementById("bonus").innerHTML = "!4X BONUS FOR 15 SECONDS!";
      document.getElementById("cancelbonus").innerHTML = "Cancel Bonus";
      time++;
      if (time == 15) {
        document.getElementById("cancelbonus").innerHTML = "";
        document.getElementById("bonus").innerHTML = "1x (No Bonus)";
        bonus = 1;
        return;
      }
    }
  }
  else if (bonus == 1) {
    document.getElementById("bonus").innerHTML = "1x (No Bonus)";
    document.getElementById("cancelbonus").innerHTML = "";
    time++;
    if (time == 60) {
      document.getElementById("bonus").innerHTML = "1x (No Bonus)";
      document.getElementById("cancelbonus").innerHTML = "";
      return;
    }
  }
  else {
    alert("ERROR! Error code: 0;");
  }
}

function cancel_bonus() {
  document.getElementById("bonus").innerHTML = "1x (No Bonus)";
  document.getElementById("cancelbonus").innerHTML = "";
  bonus = 1;
  return;
}

function autosavebutton() {
  if (autosaver === false) {
    autosaver = true;
    document.getElementById("autosavebutton").innerHTML = "Autosave: On"
  }
  else if (autosaver === true) {
    autosaver = false;
    document.getElementById("autosavebutton").innerHTML = "Autosave: Off"
  }
}

function promotional_code() {
  var var1 = confirm("Do you have a promotional code? [Please Cancel if you do not]");
  if (var1 === true) {
    var var2 = prompt("Please insert promotional code:");
    var var3 = pc.includes(var2);
    if (var3 === true) {
      alert("Success. You have obtained 1000 pies as a headstart!");
      pies = pies + 1000;
      save();
      load();
      update();
    }
    else {
      alert("Oh no. Looks like that didn't work. You may have typed it wrong.");
      alert("Continuing normally...");
    }
  }
  else {
    alert("Continuing normally...");
  }
}

//Unused\\

function achievements() {
  if (achievement1 == 0) {
    if (pies == 1 || pies > 1) {
      alert("Achievement 1: First Click! [Obtain 1 Pie(s)]");
      achievement1 = 1;
    }
  }
  if (achievement2 == 0) {
    if (pies == 10 || pies > 10) {
      alert("Achievement 2: Warming up! [Obtain 10 Pie(s)]");
      achievement2 = 1;
    }
  }
  if (achievement3 == 0) {
    if (pies == 100 || pies > 100) {
      alert("Achievement 3: Getting addicted! [Obtain 100 Pie(s)]");
      achievement3 = 1;
    }
  }
  if (achievement4 == 0) {
    if (pies == 1000 || pies > 1000) {
      alert("Achievement 4: Almost addicted! [Obtain 1000 Pie(s)]");
      achievement4 = 1;
    }
  }
  if (achievement5 == 0) {
    if (pies == 10000 || pies > 10000) {
      alert("Achievement 5: Addicted! [Obtain 10000 Pie(s)]");
      achievement5 = 1;
    }
  }
  if (achievement6 == 0) {
    if (pies == 100000 || pies > 100000) {
      alert("Achievement 6: Addicted god! [Obtain 100000 Pie(s)]");
      achievement6 = 1;
    }
  }
  if (achievement7 == 0) {
    if (pies == 1000000 || pies > 1000000) {
      alert("Achievement 7: One Million! [Obtain 1000000 Pie(s)]");
      achievement7 = 1;
    }
  }
}

function achievement_save() {
  localStorage.setItem("achievement1", achievement1);
  localStorage.setItem("achievement2", achievement2);
  localStorage.setItem("achievement3", achievement3);
  localStorage.setItem("achievement4", achievement4);
  localStorage.setItem("achievement5", achievement5);
  localStorage.setItem("achievement6", achievement6);
  localStorage.setItem("achievement7", achievement7);
}

function achievement_load() {
  achievement1 = localStorage.getItem("achievement1");
  achievement1 = parseInt(achievement1);
  achievement1 = localStorage.getItem("achievement2");
  achievement1 = parseInt(achievement2);
  achievement1 = localStorage.getItem("achievement3");
  achievement1 = parseInt(achievement3);
  achievement1 = localStorage.getItem("achievement4");
  achievement1 = parseInt(achievement4);
  achievement1 = localStorage.getItem("achievement5");
  achievement1 = parseInt(achievement5);
  achievement1 = localStorage.getItem("achievement6");
  achievement1 = parseInt(achievement6);
  achievement1 = localStorage.getItem("achievement7");
  achievement1 = parseInt(achievement7);
}

function extra_alert() {
  alert("Listing all achievements currently obtained!:")
}
