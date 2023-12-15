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

// Manually updated list of songs with corrected file extensions
var songs = [
  "deck-the-halls-xmas.mp3",
  "carol-of-the-bells-xmas-hip-hop-music.mp3",
  "enchanted-chimes.mp3",
  "jingle-family.mp3", // Assuming .mp3 extension
  "joyful-jingle.mp3", // Assuming .mp3 extension
  "silent-night_medium.mp3", // Assuming .mp3 extension
  "we-wish-you-a-merry-christmas-xmas.mp3" // Assuming .mp3 extension
];

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

// Global current song index
var currentSong = 0;

// Play a song
function playSong(index) {
  currentSong = index;
  audioSource.src = `assets/music/${songs[currentSong]}`;
  audioPlayer.load();
  audioPlayer.play();
}

// Play the next song in the playlist
function nextSong() {
  currentSong = (currentSong + 1) % songs.length; // Loop back to the first song
  playSong(currentSong);
}

// Play the previous song in the playlist
function prevSong() {
  if (currentSong === 0) {
    currentSong = songs.length - 1; // Go to the last song
  } else {
    currentSong--; // Go to the previous song
  }
  playSong(currentSong);
}

// Event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', nextSong);
document.getElementById('prevButton').addEventListener('click', prevSong);

// Attach event listeners for playlist selection
playlist.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === "LI") {
    playSong(parseInt(e.target.getAttribute('data-index'), 10));
  }
});

// Function to highlight the currently playing song
function highlightPlayingSong() {
  // Remove 'playing' class from all playlist items
  document.querySelectorAll('#playlist li').forEach(function(item) {
    item.classList.remove('playing');
  });
  
  // Add 'playing' class to the playlist item corresponding to the current song
  var playingListItem = document.querySelector('#playlist li[data-index="' + currentSong + '"]');
  if (playingListItem) {
    playingListItem.classList.add('playing');
  }
}

// Modify playSong function to call highlightPlayingSong
function playSong(index) {
  currentSong = index;
  audioSource.src = `assets/music/${songs[currentSong]}`;
  audioPlayer.load();
  audioPlayer.play();
  highlightPlayingSong(); // Call this function whenever a song starts playing
}

// Initialize playlist
loadPlaylist();
