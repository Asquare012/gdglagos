// Set the date we're counting down to
let countDownDate = new Date("Nov 26, 2022 13:00:00").getTime();
setInterval(timing, 1000);

function timing() {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // assignment
    document.querySelector("#d").innerHTML = days;
    document.querySelector("#h").innerHTML = hours;
    document.querySelector("#m").innerHTML = minutes;
    document.querySelector("#s").innerHTML = seconds;
}