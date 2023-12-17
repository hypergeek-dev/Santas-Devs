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

  function updateSongDetails(songIndex) {
    var songTitle = songs[songIndex].split('.')[0];
    document.getElementById('current-song').textContent = songTitle.replace(/-/g, " ");
  }

  function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
    audioPlayer.play();
    updateSongDetails(currentSongIndex);
    updatePlayPauseIcon();
    document.getElementById('playlist-modal').style.display = 'none';
  }

  function loadPlaylist() {
    var playlistElement = document.getElementById('playlist-list');
    playlistElement.innerHTML = '';
    songs.forEach(function(song, index) {
      var listItem = document.createElement('li');
      listItem.textContent = song.split('.')[0].replace(/-/g, " ");
      listItem.addEventListener('click', function() {
        playSong(index);
      });
      playlistElement.appendChild(listItem);
    });
  }

  document.getElementById('play-pause').addEventListener('click', function() {
    var icon = this.querySelector('i');
    if (audioPlayer.paused) {
      audioPlayer.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      audioPlayer.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
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

  document.getElementById('volume-mute-toggle').addEventListener('click', function() {
    var volumeIcon = this.querySelector('.volume-icon');
    audioPlayer.muted = !audioPlayer.muted;
    if (audioPlayer.muted) {
      volumeIcon.classList.remove('fa-volume-up');
      volumeIcon.classList.add('fa-volume-mute');
    } else {
      volumeIcon.classList.remove('fa-volume-mute');
      volumeIcon.classList.add('fa-volume-up');
    }
  });

  document.getElementById('volume-control').addEventListener('input', function() {
    audioPlayer.volume = this.value / 100;
    audioPlayer.muted = false;
    document.querySelector('.volume-icon').classList.remove('fa-volume-mute');
    document.querySelector('.volume-icon').classList.add('fa-volume-up');
  });

  audioPlayer.addEventListener('timeupdate', function() {
    var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById('song-progress').value = progress;
  });

  document.getElementById('song-progress').addEventListener('input', function() {
    var time = audioPlayer.duration * (this.value / 100);
    audioPlayer.currentTime = time;
  });

  // Toggle playlist modal visibility
  function togglePlaylistModal() {
    var playlistModal = document.getElementById('playlist-modal');
    if (playlistModal.style.display === 'block') {
        playlistModal.style.display = 'none';
    } else {
        playlistModal.style.display = 'block';
        loadPlaylist();
    }
  }

  // Event listener for the playlist toggle button
  document.getElementById('playlist-toggle').addEventListener('click', function() {
      togglePlaylistModal();
  });

  // Event listener for the close button in the playlist modal
  document.querySelector('.close-modal').addEventListener('click', function() {
      togglePlaylistModal();
  });

  function updatePlayPauseIcon() {
    var icon = document.getElementById('play-pause').querySelector('i');
    if (audioPlayer.paused) {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    } else {
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    }
  }

  updateSongDetails(currentSongIndex);
});
