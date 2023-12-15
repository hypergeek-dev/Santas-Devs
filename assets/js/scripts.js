// Function to update the countdown every second
// function updateCountdown() {
//     // Set the target date for the countdown (Christmas Day)
//     const targetDate = new Date("Dec 25, 2023 00:00:00").getTime();
//     // Get the current date and time
//     const now = new Date().getTime();
//     // Calculate the timeLeft between now and the target date
//     const timeLeft = targetDate - now;
  
//     // Convert the timeLeft into days, hours, minutes, and seconds
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
//     // Update the countdown HTML with the new time
//     document.getElementById('days').textContent = days < 10 ? '0' + days : days;
//     document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
//     document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
//     document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  
//     // If the countdown is over, clear the interval and show a message
//     if (timeLeft < 0) {
//       clearInterval(interval);
//       document.getElementById('countdown').textContent = "Merry Christmas!";
//     }
//   }
  
//   // Initialize the countdown to update every second (1000 milliseconds)
//   const interval = setInterval(updateCountdown, 1000);


document.addEventListener("DOMContentLoaded", function () {
  
  // ------------------------------ COUNTDOWN 

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
      // document.getElementById("countdown").innerHTML = "Merry and bright Christmas to you! Cheers to the season of joy!";
      christmasDate = new Date("December 25, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
    }

    updateCountdownDisplay();
  }, 1000);
  
  
// ------------------------------ MUSIC PLAYER

// Manually updated list of songs
var songs = ["deck-the-halls-xmas.mp3", "carol-of-the-bells-xmas-hip-hop-music.mp3", "enchanted-chimes.mp3", "jingle-family", "joyful-jingle", "silent-night_medium", "we-wish-you-a-merry-christmas-xmas"]; // Add more songs as needed

// Select elements
var audioPlayer = document.getElementById('audioPlayer');
var audioSource = document.getElementById('audioSource');
var playlist = document.getElementById('playlist');

// Load playlist
function loadPlaylist() {
  songs.forEach(function(song, index) {
    var listItem = document.createElement('li');
    listItem.textContent = song;
    listItem.setAttribute('data-index', index);
    playlist.appendChild(listItem);
  });
}

// Play a song
function playSong(index) {
  currentSong = index;
  audioSource.src = `assets/music/${songs[index]}`;
  audioPlayer.load();
  audioPlayer.play();
}

// Attach event listeners for playlist selection
playlist.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === "LI") {
    playSong(e.target.getAttribute('data-index'));
  }
});

// Global current song index
var currentSong = 0;

// Play the next song in the playlist
function nextSong() {
  if (currentSong < songs.length - 1) {
    playSong(++currentSong);
  }
}

// Play the previous song in the playlist
function prevSong() {
  if (currentSong > 0) {
    playSong(--currentSong);
  }
}

// Event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', nextSong);
document.getElementById('prevButton').addEventListener('click', prevSong);


// Initialize playlist
loadPlaylist();

});
