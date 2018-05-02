/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

//Normal Start-Up\\

var bosshp = 5;
document.getElementById("hptext").innerHTML = "HP: " + bosshp;

//Functions\\

function hp(amount) {
  bosshp = bosshp + amount;
  document.getElementById("hptext").innerHTML = "HP: " + bosshp;
  if (bosshp == 0 || bosshp < 0) {
    bosshp = 0;
    var var1 = localStorage.getItem("pieamount");
    var var2 = 500 + Math.floor((Math.random() * 1000) + 1);
    var1 = var1 + var2;
    alert("You earned " + var2 + " pies from that!")
    localStorage.setItem("pieamount", pies);
    window.open("pieclicker.html", "_self")
  }
}
