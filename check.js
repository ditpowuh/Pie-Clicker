/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

var MobileCheck = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (MobileCheck.Android() || MobileCheck.BlackBerry() || MobileCheck.iOS() || MobileCheck.Opera() || MobileCheck.Windows());
  },
  ERROR: function () {
    return "ERROR";
  }
};

if (MobileCheck.any() === true) {
  window.open("mobile.html", "_self");
}
else {
  window.open("Pie Clicker/index.html", "_self");
}
