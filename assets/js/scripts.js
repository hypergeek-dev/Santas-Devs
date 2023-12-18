// Countdown Function
function updateCountdown() {
  const targetDate = new Date("Dec 25, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days < 10 ? '0' + days : days;
  document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

  if (difference < 0) {
      clearInterval(interval);
      document.getElementById('countdown').textContent = "Merry Christmas!";
  }
}


// Snow Effect
 // Amount of Snowflakes
 var snowMax = 750;
      
 // Snowflake Colours
 var snowColor = ["#DDD", "#EEE"];
 
 // Snow Entity
 var snowEntity = "&#x2022;";
 
 // Falling Velocity
 var snowSpeed = 0.75;
 
 // Minimum Flake Size
 var snowMinSize = 8;
 
 // Maximum Flake Size
 var snowMaxSize = 24;
 
 // Refresh Rate (in milliseconds)
 var snowRefresh = 50;
 
 // Additional Styles
 var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";
 
 // Variables for snowflakes and position
 var snow = [], pos = [], coords = [], lefr = [], marginBottom, marginRight, snowContainer;
 
 function randomise(range) {
     return Math.floor(range * Math.random());
 }
 
 function initSnow() {
     snowContainer = document.getElementById('snow-container'); 
     var snowSize = snowMaxSize - snowMinSize;
     marginBottom = snowContainer.clientHeight - 5;
     marginRight = snowContainer.clientWidth - 15;
 
     for (var i = 0; i <= snowMax; i++) {
         coords[i] = 0;
         lefr[i] = Math.random() * 15;
         pos[i] = 0.03 + Math.random() / 10;
 
         var flake = document.createElement('span');
         flake.id = 'flake' + i;
         flake.innerHTML = snowEntity;
         flake.style.cssText = snowStyles + "position:absolute;top:-" + snowMaxSize;
         snowContainer.appendChild(flake);
 
         snow[i] = flake;
         snow[i].style.fontFamily = "inherit";
         snow[i].size = randomise(snowSize) + snowMinSize;
         snow[i].style.fontSize = snow[i].size + "px";
         snow[i].style.color = snowColor[randomise(snowColor.length)];
         snow[i].style.zIndex = 2;
         snow[i].sink = snowSpeed * snow[i].size / 5;
         snow[i].posX = randomise(marginRight - snow[i].size);
         snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
         snow[i].style.left = snow[i].posX + "px";
         snow[i].style.top = snow[i].posY + "px";
     }
 
     moveSnow();
 }
 
 function resize() {
     if (!snowContainer) {
         return;
     }
     marginBottom = snowContainer.clientHeight - 5;
     marginRight = snowContainer.clientWidth - 50;
 }
 
 function moveSnow() {
     for (var i = 0; i <= snowMax; i++) {
         coords[i] += pos[i];
         snow[i].posY += snow[i].sink;
         snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
         snow[i].style.top = snow[i].posY + "px";
 
         if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
             snow[i].posX = randomise(marginRight - snow[i].size);
             snow[i].posY = 0;
         }
     }
     setTimeout(moveSnow, snowRefresh);
 }
 
 // Event listeners
 window.addEventListener('resize', resize);
 window.addEventListener('load', initSnow);


 // NAV BAR
 // Listen for a document ready event if you are not using jQuery
document.addEventListener('DOMContentLoaded', function () {
  // Get all nav links
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Iterate through each nav link
  navLinks.forEach(function(link) {
    // Remove active class from all nav links
    link.classList.remove('active');

    // Add active class to the current page's nav link
    if(link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
