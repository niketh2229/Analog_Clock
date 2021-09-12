// Gettig Day Month Date Year Time AM/PM
(function(){
    setInterval(() =>{
        // let current_time = (new Date().toString());
        // current_time = current_time.replace(" GMT+0530 (India Standard Time)","")
        // let hours = (new Date().getHours());
        // let AM_PM = hours <= 11 ? "AM" : "PM";
        // let final_time = `${current_time} ${AM_PM}`
        // document.getElementById("main-p").innerHTML = `${final_time}`;
        let hours = (new Date().getHours());
        let minutes = (new Date().getMinutes());
        let seconds = (new Date().getSeconds());
        hours =  hours > 12 ? hours : hours-12;
        let hours_angle = 30 * (hours);
        if(minutes >= 15 && minutes < 30){
            hours_angle += 7.5;
        }
        else if(minutes >= 30 && minutes < 45){
            hours_angle += 15;
        }
        else if(minutes >= 45 && minutes < 60){
            hours_angle += 22.5;
        }
        else{
            hours_angle += 7.5;
        }
        let minutes_angle = 6 * (minutes);
        let seconds_angle = 6 * (seconds);
        console.log(hours, minutes, seconds);
        hour.style.transform = `rotate(${hours_angle}deg)`;
        minute.style.transform = `rotate(${minutes_angle}deg)`;
        second.style.transform = `rotate(${seconds_angle}deg)`;
    },1000)
})();
// document.onkeydown = function(e) {
//     if(e.keyCode == 123) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }