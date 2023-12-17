// JavaScript code to control the music player
document.addEventListener('DOMContentLoaded', function() {
    var songs = [
      "deck-the-halls-xmas.mp3",
      "carol-of-the-bells-xmas-hip-hop-music.mp3",
      "enchanted-chimes.mp3",
      "jingle-family.mp3", 
      "joyful-jingle.mp3",
      "silent-night_medium.mp3", 
      "we-wish-you-a-merry-christmas-xmas.mp3"
    ];
  
    var currentSongIndex = 0;
    var audioPlayer = new Audio('assets/music/' + songs[currentSongIndex]);
  
    // Update song details function
    function updateSongDetails(songIndex) {
      // Assuming the song titles are the actual file names without the extension
      var songTitle = songs[songIndex].split('.')[0];
      document.getElementById('current-song').textContent = songTitle.replace(/-/g, " ");
    }
  
    // Player controls
    document.getElementById('play-pause').addEventListener('click', function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    });
  
    document.getElementById('prev-song').addEventListener('click', function() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
      audioPlayer.play();
      updateSongDetails(currentSongIndex);
    });
  
    document.getElementById('next-song').addEventListener('click', function() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
      audioPlayer.play();
      updateSongDetails(currentSongIndex);
    });
  
    // Volume control
    document.getElementById('volume-control').addEventListener('input', function() {
      audioPlayer.volume = this.value / 100;
    });
  
    // Update the progress bar as the song plays
    audioPlayer.addEventListener('timeupdate', function() {
      var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      document.getElementById('song-progress').value = progress;
    });
  
    // Seek in the song when the progress bar is changed
    document.getElementById('song-progress').addEventListener('input', function() {
      var time = audioPlayer.duration * (this.value / 100);
      audioPlayer.currentTime = time;
    });
  
    // Toggle playlist display using the custom toggle
    document.getElementById('checkbox').addEventListener('change', function() {
        var playlist = document.getElementById('playlist');
        // Toggle the playlist visibility based on the checkbox state
        playlist.style.display = this.checked ? 'block' : 'none';
    });
  
    // Initial song details update
    updateSongDetails(currentSongIndex);
});
  