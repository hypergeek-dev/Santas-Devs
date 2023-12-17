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

    // Function to update song details on display
    function updateSongDetails(songIndex) {
        var songTitle = songs[songIndex].split('.')[0];
        document.getElementById('current-song').textContent = songTitle.replace(/-/g, " ");
    }

    // Function to play a specific song from the playlist
    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
        audioPlayer.play();
        updateSongDetails(currentSongIndex);
        document.getElementById('playlist-modal').style.display = 'none'; // Close the playlist modal
    }

    // Function to load songs into the playlist modal
    function loadPlaylist() {
        var playlistElement = document.getElementById('playlist-list');
        playlistElement.innerHTML = '';
        songs.forEach(function(song, index) {
            var listItem = document.createElement('li');
            listItem.textContent = song.split('.')[0].replace(/-/g, " ");
            listItem.addEventListener('click', function() {
                playSong(index); // Play the song when clicked
            });
            playlistElement.appendChild(listItem);
        });
    }

    // Play/Pause toggle functionality
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

    // Previous song functionality
    document.getElementById('prev-song').addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
        audioPlayer.play();
        updateSongDetails(currentSongIndex);
    });

    // Next song functionality
    document.getElementById('next-song').addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audioPlayer.src = 'assets/music/' + songs[currentSongIndex];
        audioPlayer.play();
        updateSongDetails(currentSongIndex);
    });

    // Volume control and mute toggle functionality
    document.getElementById('volume-mute-toggle').addEventListener('click', function() {
        var volumeIcon = this.querySelector('.volume-icon');
        if (!audioPlayer.muted) {
            audioPlayer.muted = true;
            volumeIcon.classList.remove('fa-volume-up');
            volumeIcon.classList.add('fa-volume-mute');
        } else {
            audioPlayer.muted = false;
            volumeIcon.classList.remove('fa-volume-mute');
            volumeIcon.classList.add('fa-volume-up');
        }
    });

    // Reflecting volume changes on the volume slider
    document.getElementById('volume-control').addEventListener('input', function() {
        audioPlayer.volume = this.value / 100;
        audioPlayer.muted = false;
        document.querySelector('.volume-icon').classList.remove('fa-volume-mute');
        document.querySelector('.volume-icon').classList.add('fa-volume-up');
    });

    // Update the progress bar as the song plays
    audioPlayer.addEventListener('timeupdate', function() {
        var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('song-progress').value = progress;
    });

    // Seek functionality in the song
    document.getElementById('song-progress').addEventListener('input', function() {
        var time = audioPlayer.duration * (this.value / 100);
        audioPlayer.currentTime = time;
    });

    // Playlist modal toggle functionality
    document.getElementById('playlist-toggle').addEventListener('click', function() {
        var playlistModal = document.getElementById('playlist-modal');
        playlistModal.style.display = 'block';
        loadPlaylist(); // Load songs into the playlist modal
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('playlist-modal').style.display = 'none';
    });

    // Initial update of song details
    updateSongDetails(currentSongIndex);
});
