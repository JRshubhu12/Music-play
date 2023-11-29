new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
                {
          name: "Sun Sathiya ",
          artist: "Priya Saraiya, Divya Kumar",
          cover: "https://iili.io/HDjIDep.png",
          source: "https://audio.jukehost.co.uk/m9rKFdjU7Zy3j29TTv96fwSiFCLd4DJt",
          url: "https://audio.jukehost.co.uk/m9rKFdjU7Zy3j29TTv96fwSiFCLd4DJt",
          favorited: false
        },
        {
          name: "Dil Jhoom",
          artist: "Mithoon and Arijit Singh",
          cover: "https://lh3.googleusercontent.com/g31Z4F_YCGr8TrUGG1D1aeC3X9JabGvXUUcPQBIjB7LvraKYhvKvz7PDVDbEfcyE28irRlRHUsqscz7Bgg=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/SfuHQVmLohdNrqYbrPdGKIE8BpIyLWIB",
          url: "https://audio.jukehost.co.uk/SfuHQVmLohdNrqYbrPdGKIE8BpIyLWIB",
          favorited: false
        },
        {
          name: "Saude Bazi ",
          artist: "Anupam Amod",
          cover: "https://lh3.googleusercontent.com/z-54eD_q04aRf82GE2HLPnio2yHIHlghuiLa458LvlhQU93KqFLb4pxluv9dR4NJVhEMpL6uwriXy9wa=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/7LGvlE4HM9OCdV8yCiPO6C8JsiRFOteS",
          url: "https://audio.jukehost.co.uk/7LGvlE4HM9OCdV8yCiPO6C8JsiRFOteS",
          favorited: false
        },

        {
          name: "Kasto Mazza",
          artist: "Shreya Ghoshal and Sonu Nigam",
          cover: "https://lh3.googleusercontent.com/SooypaFf5bufSrxDXrBnj5tul83sR0HvPEeZ8WrPwIxhmGZiVVDA7VO0_hXQCPtnRUnByEENuXMLbOFK=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/Zb9vk6ZCVzRsKAQARG8neDX3stHw9F4i",
          url: "https://audio.jukehost.co.uk/Zb9vk6ZCVzRsKAQARG8neDX3stHw9F4i",
          favorited: false
        },

        {
          name: "Sahiba",
          artist: "Pawny Pandey & Romy",
          cover: "https://lh3.googleusercontent.com/WAUcTkuIYCrurnrHC_yypyriCyf0wPa4_SqSvyiUFixCe1rb0rvzI0LfkoEpGiO3Xr5kWUNsqwvA43wZCg=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/jo0U0qfPgcq1bDR894mC8TireDo2euLp",
          url: "https://audio.jukehost.co.uk/jo0U0qfPgcq1bDR894mC8TireDo2euLp",
          favorited: false
        },
        {
          name: "Afreen Afreen",
          artist: "Rahat Fateh Ali Khan & Momina Mustehsan",
          cover: "https://lh3.googleusercontent.com/1CwIzw3xa61fIpXdpjHncUTR86xFvkiKYm8JAyN-5nwJAEBdvOKew0R30TRRHja66ZXzNC9bQo5n49xk=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/xdjrsHXrTU0kqKO4bl6a13MMPM3jGG8A",
          url: "https://audio.jukehost.co.uk/xdjrsHXrTU0kqKO4bl6a13MMPM3jGG8A",
          favorited: false
        },
        {
          name: "Fakira by Sanam Puri",
          artist: "Sanam Puri",
          cover: "https://lh3.googleusercontent.com/K-yuo5XEQf32mDX9HnsoFK738urvaVfR-STtOZtxQcgthaWaTeXHUFWKTUbYu6n7lxvkYDmBdRUpO2M=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/sHqfrq6BImdht7E8uE2IRBSuIw7Ok5mu",
          url: "https://audio.jukehost.co.uk/sHqfrq6BImdht7E8uE2IRBSuIw7Ok5mu",
          favorited: false
        },
        {
          name: "Habibi Ke Nain",
          artist: "Shreya Ghoshal & Jubin Nautiyal",
          cover: "https://lh3.googleusercontent.com/iuDg59eSMokyxB7rsE_6xQadyD-8TtlhuPCAPtuemZ5r9lLNxBRSk77BYNRknhbp3GAMs0DEIlutTRA=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/ga1kJwwpUEAb60NUC24p0gxitwXV83vE",
          url: "https://audio.jukehost.co.uk/ga1kJwwpUEAb60NUC24p0gxitwXV83vE",
          favorited: false
        },
        {
          name: "Nachdi Phira",
          artist: "Meghna Mishra",
          cover: "https://lh3.googleusercontent.com/kLwQAQb1Galxivd7hPONfUltQmp-G-SF53zsl6-jGhNKLjQCfvdOPm-zrLo0l09RdAkv6t2_YPypUsJFAQ=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/9FZa9rxy5LHQfOansq3PdN0Nx5N2isOi",
          url: "https://audio.jukehost.co.uk/9FZa9rxy5LHQfOansq3PdN0Nx5N2isOi",
          favorited: false
        },
        {
          name: "Oonchi Oonchi Waadi",
          artist: "Hansraj Raghuwanshi",
          cover: "https://lh3.googleusercontent.com/2azjTdu-OFcbj_8YSUA1GFjWQwzutbNSz0PBGPS4Gth-dsuCvyqZ_nlDuoS9VhKRy0dxZtzu5a6mvRo=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/e7efrOS0HfD4lBP9vLDbILWpM8LsmZC4",
          url: "https://audio.jukehost.co.uk/e7efrOS0HfD4lBP9vLDbILWpM8LsmZC4",
          favorited: false
        },
        {
        	name: "Lamhey",
          artist: "Anubha Bajaj",
          cover: "https://lh3.googleusercontent.com/P8KH4NUp8sIvh_4szvW2OLyd2_LzwJM-DJWPWeMYTGQcz_VHMjxSAVkq0sudNTLL1agn3HNO_iV-qgtROg=w544-h544-l90-rj",
          source: "https://audio.jukehost.co.uk/dqsyLBj7ydutctRyNJH0mWYXxPQPuGom",
          url: "https://audio.jukehost.co.uk/dqsyLBj7ydutctRyNJH0mWYXxPQPuGom",
          favorited: false
        }
      ],
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
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)

    }
  }
});
