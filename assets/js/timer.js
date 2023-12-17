document.addEventListener("DOMContentLoaded", function () {

    
    let christmasDate = new Date("December 25, " + new Date().getFullYear() + " 00:00:00").getTime();
    let days, hours, minutes, seconds;

    // Display 
    const updateCountdownDisplay = () => {
      document.getElementById("days-count").innerHTML = String(days).padStart(2, "0");
      document.getElementById("hours-count").innerHTML = String(hours).padStart(2, "0");
      document.getElementById("minutes-count").innerHTML = String(minutes).padStart(2, "0");
      document.getElementById("seconds-count").innerHTML = String(seconds).padStart(2, "0");
    }

    // Update time
    const countdown = setInterval(function () {
      const currentDte = new Date().getTime();

      const timeLeft = christmasDate - currentDte;

      days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Reset the countdown 
      if (timeLeft < 0) {
        clearInterval(countdown);        
        christmasDate = new Date("December 25, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
      }

      updateCountdownDisplay();
    }, 1000);
  });