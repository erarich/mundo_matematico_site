<template>
  <div>
    <header class="header">
      <h1
        style="
          font-weight: bold;
          font-size: 25px;
          font-family: 'Rubik Mono One', monospace;
          color: #5271ff;
          padding: 15px;
        "
      >
        <span style="color: white">MUNDO</span> MATEMÁTICO
      </h1>
      <div class="menu_buttons">
        <button class="control-button" @click="scrollToSection('section1')">
          BAIXAR
        </button>
        <button class="control-button" @click="scrollToSection('section2')">
          VIDEOS
        </button>
        <button class="control-button" @click="scrollToSection('section3')">
          DESENVOLVEDORES
        </button>
      </div>
    </header>

    <!-- Seções da landing page -->
    <section id="section1" class="fullscreen-section aquamarine">
      <HeroSection />
    </section>

    <section id="section2" class="fullscreen-section lightgreen">
      <Video />
    </section>

    <section id="section3" class="fullscreen-section lightyellow">
      <Devs />
    </section>
  </div>
</template>

<script>
import Footer from "../layout/Footer.vue";
import Devs from "../layout/Devs.vue";
import Video from "../layout/Video.vue";
import HeroSection from "../layout/HeroSection.vue";

export default {
  components: {
    Footer,
    Devs,
    HeroSection,
    Video,
  },
  methods: {
    scrollToSection(sectionId) {
      // Obtém o elemento da seção alvo
      const targetElement = document.getElementById(sectionId);

      // Rola suavemente para a seção alvo
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.fullscreen-section {
  height: 100vh; /* 100% da altura da tela */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.aquamarine {
  background-color: #4fbafe;
}

.lightgreen {
  background-color: lightgreen;
}

.lightyellow {
  background-color: #f4f4f4;
}

.header {
  background-color: #4fbafe;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu_buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;
  gap: 25px;
}

.control-button {
  background-color: #5271ff;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  margin: 8px;
}

@media only screen and (max-width: 600px) {
  .menu_buttons {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }

  .control-button {
    margin: 8px 0;
  }
}
</style>
