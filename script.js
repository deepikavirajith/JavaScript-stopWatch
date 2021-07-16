window.onload = function(){ 
    // your code 
let tens = 00;
let seconds = 00;
let hours = 00;
var interval;
var phours = document.getElementById("hours");
var pten = document.getElementById("tens");
var pseconds = document.getElementById("seconds");

document.getElementById("startbnt").onclick = function() {
    
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
 };
 document.getElementById("stopbnt").onclick = function() {
    clearInterval(interval);
 };

 document.getElementById("resetbnt").onclick = function() {
    clearInterval(interval);
    hours = "00";
    tens = "00";
    seconds = "00";
    pten.innerHTML = tens;
    pseconds.innerHTML = seconds;
    phours.innerHTML = hours;
 };

 function startTimer () {
    if(seconds < 10){
        seconds++
        pseconds.innerHTML = "0" + seconds; 
    }
    if (seconds >= 10){
        pseconds.innerHTML = seconds++; 
    }
    if (seconds > 59){
        tens++;
        pten.innerHTML = "0" + tens;
        console.log(tens);
        seconds = 00;
        pseconds.innerHTML = "0" + seconds++; 
        if(tens > 59){
            hours++;
            if(hours < 10){
            phours.innerHTML="0" + hours;
            tens = 00;
            pten.innerHTML = "0" + tens++;
            seconds = 00;
            pseconds.innerHTML = "0" + seconds++; 
            }
            else{
                phours.innerHTML= hours;
                tens = 00;
                pten.innerHTML = "0" + tens++;
                seconds = 00;
                pseconds.innerHTML = "0" + seconds++; 
            }
        }
    
    }
  
  }

}
