// Set the date we're counting down to in UTC
var countDownDate = new Date("June 21, 2024 20:00:00 UTC").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current UTC time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = '<a href="https://www.youtube.com/watch?v=2dH3-QHS-Kc">HBD FINANA</a>';
        document.getElementById("enterwebsite").innerHTML = '<a href="https://finanaryugu.com/ancientfeesh2024"> \>> FINANAYRUGU.COM \<< </a>';
    }
}, 1000);
