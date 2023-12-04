<template>
  <div class="video-slider">
    <div
      class="video-container"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <iframe
        v-for="(videoId, index) in videoIds"
        :key="index"
        :src="`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="buttons">
      <button
        @click="prevVideo"
        :class="{ hidden: currentIndex === 0 }"
        class="control-button prev-button"
      >
        ANTERIOR
      </button>
      <button
        @click="nextVideo"
        :class="{ hidden: currentIndex === videoIds.length - 1 }"
        class="control-button next-button"
      >
        PRÓXIMO
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoIds: ["tLzst82nfUM", "LZg7CyeW7hA", "Q8W5TA-89As", "5_EeX_wo4Ps"],
      currentIndex: 0,
    };
  },
  methods: {
    nextVideo() {
      this.currentIndex = (this.currentIndex + 1) % this.videoIds.length;
    },
    prevVideo() {
      this.currentIndex =
        (this.currentIndex - 1 + this.videoIds.length) % this.videoIds.length;
    },
  },
};
</script>

<style scoped>
.video-slider {
  position: relative;
  overflow: hidden;
  width: 900px; /* Ajuste conforme necessário */
  display: flex;
  flex-direction: column;
}

.video-container {
  display: flex;
  transition: transform 0.5s ease;
}

.video-container iframe {
  flex: 0 0 100%;
  width: 600px;
  height: 450px;
}

.control-button {
  top: 50%;
  transform: translateY(-50%);
  background-color: #5271ff;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  margin: 8px;
  margin-top: 12px;
}

.prev-button {
  left: 0;
}

.next-button {
  right: 0;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 15px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
