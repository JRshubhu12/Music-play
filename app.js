new Vue({
  el: "#app",
  data() {
    return {
      searchQuery: '',
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [ name: "Saude Bazi ",
          artist: "Anupam Amod",
          cover: "https://lh3.googleusercontent.com/z-54eD_q04aRf82GE2HLPnio2yHIHlghuiLa458LvlhQU93KqFLb4pxluv9dR4NJVhEMpL6uwriXy9wa=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/7LGvlE4HM9OCdV8yCiPO6C8JsiRFOteS",
          url: "https://audio.jukehost.co.uk/7LGvlE4HM9OCdV8yCiPO6C8JsiRFOteS",
          favorited: false],
      filteredTracks: [],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    // Other music player methods...

    searchSongs() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        this.filteredTracks = this.tracks;
      } else {
        this.filteredTracks = this.tracks.filter(track =>
          track.name.toLowerCase().includes(query) ||
          track.artist.toLowerCase().includes(query)
        );
      }
    },
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // Preload covers (optional)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  },
});
