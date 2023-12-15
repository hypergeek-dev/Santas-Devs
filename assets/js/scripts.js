// Function to update the countdown every second
function updateCountdown() {
    // Set the target date for the countdown (Christmas Day)
    const targetDate = new Date("Dec 25, 2023 00:00:00").getTime();
    // Get the current date and time
    const now = new Date().getTime();
    // Calculate the difference between now and the target date
    const difference = targetDate - now;
  
    // Convert the difference into days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Update the countdown HTML with the new time
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  
    // If the countdown is over, clear the interval and show a message
    if (difference < 0) {
      clearInterval(interval);
      document.getElementById('countdown').textContent = "Merry Christmas!";
    }
  }
  
  // Initialize the countdown to update every second (1000 milliseconds)
  const interval = setInterval(updateCountdown, 1000);


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
