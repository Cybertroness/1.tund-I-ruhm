 window.onload = function(){

   var clock = document.getElementById('clock');


   window.setInterval(function(){

     // iga ooteaja järel käivitatakse
     writeDate();

   }, 100);// millisekundid - 1000ms = 1s


 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;

}

function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}
