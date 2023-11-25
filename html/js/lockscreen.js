var passcodeEntered = false;
var unlockTime = 0;
var unlockDuration = 1 * 60 * 1000; // 5 minutes in milliseconds


$(document).on("click", ".iphone-footer", function(e){
  e.preventDefault();

  if (passcodeEntered && Date.now() < unlockTime + unlockDuration) {
      $(".iphone-14").css({"display": "none"});
      $(".phone-footer").css({"display": "block"});
  } else {
      $(".iphone-14").css({"display": "none"});
      $(".iphone-pass").css({"display": "block"});
  }
});


function dateArea(){
    var dateDay = new Date().getDate();
    var d = new Date();
    var dateMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dateName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.querySelector(".day").innerHTML=dateDay;
    document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
    document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
  }
  
  setInterval(dateArea, 1000);
  
  function clockArea(){
    var hoursArea = new Date().getHours();
    var minutesArea = new Date().getMinutes();
    var clockArea = hoursArea + ":" + minutesArea;
    
    if(hoursArea<10){
      var clockArea = "0" + hoursArea + ":" + minutesArea;
    } else if(minutesArea<10){
      var clockArea = hoursArea + ":0" + minutesArea;
    } else{
      var clockArea = hoursArea + ":" + minutesArea;
    }
    document.querySelector(".clock-area").innerHTML = clockArea;
  }
  
  setInterval(clockArea, 1000);


  