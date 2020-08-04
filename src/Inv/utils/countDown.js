const setCountdown = (datecount) => {
    var countDownDate = new Date(datecount).getTime();
    var days, hours, minutes, seconds;
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(document.getElementById('hours')) {
            // document.getElementById('days').innerHTML = `${days}d: `;
            document.getElementById('hours').innerHTML = `${hours}hrs: `;
            document.getElementById('mins').innerHTML = `${minutes}mins: `;
            document.getElementById('secs').innerHTML = `${seconds}secs`;
        }

        // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            // document.getElementById("demo").innerHTML = "EXPIRED";
            // document.getElementById('days').innerHTML = `${days}d: `;
            if(document.getElementById('hours')) { 
                document.getElementById('hours').innerHTML = `0hrs: `;
                document.getElementById('mins').innerHTML = `0mins: `;
                document.getElementById('secs').innerHTML = `0secs`;
            }
          }
    }, 1000);
}

export { setCountdown };