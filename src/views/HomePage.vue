<template>
  <!-- Mobile version starts -->
  <div class="" style="padding-top: 60px;overflow-x: hidden;">
    <div class="video-player">
      <video ref="videoPlayer" autoplay loop style="width: 100%; height: 80vh;">
        <source src="https://buyer-video-in.urbanic.com/eva/2e1b72cbf30d4586ab188ba6dce31734.mp4" type="video/mp4">
        <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4" type="video/ogg">
        <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4" type="video/avi">
      </video>
      <div class="controls">
        <button @click="togglePlayPause" class="btn border" style="background-color: transparent !important;">
          <i v-if="isPlaying" class="bi bi-pause"></i>
          <i v-else class="bi bi-play"></i>
        </button>
      </div>
    </div>
    <HomeCollection></HomeCollection>
    <HomePageCard></HomePageCard>
  </div>
</template>

<script>
import HomeCollection from '@/components/Collections/HomeCollection.vue';
import HomePageCard from '@/components/Collections/HomePageCard.vue';
export default {
  name: "HomePage",
  components: {
    HomeCollection,
    HomePageCard
  },
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    togglePlayPause() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  },
  mounted() {
    this.$refs.videoPlayer.controls = false;
  }
};
</script>
<style scoped>
@media (min-width:998px) {

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 50px !important;
  }
}

.video-player {
  position: relative;
}

.controls {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>