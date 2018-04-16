/*
Copyright Ditpowuh 2018 | All comments are from me
*/

//Variable Start-Up\\

var pies = 0;
var ppc = 1;

var bonus = 1;

var acu = 0;
var shopu = 0;

const acuprice = (acu + 1) * 10;
const shopuprice = (shopu + 1) * 100;

//Normal Start-Up\\

document.getElementById("text").value = 0;

var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("bite");
var sound3 = document.getElementById("buy")

update();
sound1.play();

setInterval(timer, 1000);
setInterval(setrandombonus, 1000)
setInterval(bonus, 1000)



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
    update();
  }
}

function timer() {
  var calculations1 = acu * 1;
  var calculations2 = shopu * 5;
  var completecalculations = calculations1 + calculations2;
  document.getElementById("pps").innerHTML = "You are earning " + completecalculations + " pies per second from the Upgrades."
  pies = pies + calculations1 + calculations2;
  update();
}

function save() {
  localStorage.setItem("pieamount", pies);
  localStorage.setItem("upgrade1", acu);
  localStorage.setItem("upgrade2", shopu);
  localStorage.setItem("upgradeppc", ppc);
  sound1.play();
}

function load() {
  pies = localStorage.getItem("pieamount");
  pies = parseInt(pies);
  acu = localStorage.getItem("upgrade1");
  acu = parseInt(acu);
  shopu = localStorage.getItem("upgrade2");
  shopu = parseInt(shopu);
  ppc = localStorage.getItem("upgradeppc");
  ppc = parseInt(ppc);
  update();
  sound1.play();
}

function reset() {
  var confirmation = confirm("Are you sure you want to reset your data?");
  if (confirmation == true) {
    localStorage.clear();
    localStorage.setItem("pieamount", 0);
    localStorage.setItem("upgrade1", 0);
    localStorage.setItem("upgrade2", 0);
    localStorage.setItem("upgradeppc", 1);
    alert("All data has been erased.")
  }
}

function update() {
  document.getElementById("text").value = pies;
  document.title = "Pie Clicker: " + pies + " Pies";
  document.getElementById("texttitle").innerHTML = "Pie Clicker: " + pies + " Pies";
  document.getElementById("acuamount").innerHTML = "(" + acu + ")" + " Auto Clicker (Customers):";
  document.getElementById("shopuamount").innerHTML = "(" + shopu + ")" + " Bigger Auto Clicker (Shops):";
  document.getElementById("pmtamount").innerHTML = "(" + (ppc - 1) + ")" + " Higher Pies Per Click (Pie-Making Tools)";
  document.getElementById("ppc").innerHTML = "You are earning " + ppc + " pies per click."
}

function setrandombonus() {
  var chances = Math.floor((Math.random() * 15) + 1);
  if (chances == 1) {
    var random = Math.floor((Math.random() * 6) + 1);
    if (random == 1 || random == 2 || random == 3) {
      document.getElementById("bonus").innerHTML = "!2X BONUS FOR 45 SECONDS!"
      bonus = 2;
      break;
    }
    else if (random == 4 || random == 5) {
      document.getElementById("bonus").innerHTML = "!3X BONUS FOR 30 SECONDS!"
      bonus = 3;
      break;
    }
    else if (random == 6) {
      document.getElementById("bonus").innerHTML = "!4X BONUS FOR 15 SECONDS!"
      bonus = 4;
      break;
    }
  }
}

function bonus() {
  if (bonus != 1) {
    var time = 0;
    if (bonus == 2) {
      time++;
      if (time == 45) {
        var bonus = 1;
        break;
      }
    }
    else if (bonus == 3) {
      time++;
      if (time == 30) {
        var bonus = 1;
        break;
      }
    }
    else if (bonus == 4) {
      time++;
      if (time == 15) {
        var bonus = 1;
        break;
      }
    }
  }
}
