window.addEventListener('load', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const songList = document.getElementById('song-list');
    const seekBar = document.getElementById('seek-bar');
    const currentTime = document.getElementById('current-time');
    const totalTime = document.getElementById('total-time');
    const volumeBar = document.getElementById('volume-bar');

    const songs = [
        {
            name: 'Song 1: SIGAY - Ilocano Song',
            source: 'SIGAY.mp3'
        },
        {
            name: 'Song 2: AGBABAKET - Ilocano Song',
            source: 'AGBABAKET.mp3'
        },
        {
            name: 'Song 3: ISEM - Ilocano Song',
            source: 'ISEM.mp3'
        }
    ];

    function loadSongs() {
        for (let i = 0; i < songs.length; i++) {
            const songItem = document.createElement('li');
            songItem.textContent = songs[i].name;
            songItem.addEventListener('click', function() {
                audioPlayer.src = songs[i].source;
                audioPlayer.play();
            });
            songList.appendChild(songItem);
        }
    }

    loadSongs();

    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });

    stopBtn.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;});
        audioPlayer.addEventListener('timeupdate', function() {
            const duration = audioPlayer.duration;
            const currentTime = audioPlayer.currentTime;
        
            seekBar.value = currentTime;
            currentTime.textContent = formatTime(currentTime);
            totalTime.textContent = formatTime(duration);
        });
        
        seekBar.addEventListener('input', function() {
            const seekTime = audioPlayer.duration * (seekBar.value / 100);
            audioPlayer.currentTime = seekTime;
        });
        
        volumeBar.addEventListener('input', function() {
            audioPlayer.volume = volumeBar.value;
        });
        
        function formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        }});
