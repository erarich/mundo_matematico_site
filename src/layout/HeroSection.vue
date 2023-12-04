<template>
  <div style="text-align: center">
    <h1
      style="
        font-weight: bold;
        font-size: 80px;
        font-family: 'Rubik Mono One', monospace;
        color: #5271ff;
      "
    >
      <span style="color: white">MUNDO</span><br />MATEMÁTICO
    </h1>
    <div class="game-download-container">
      <a
        href="https://github.com/erarich/projeto_de_sistemas/releases/tag/v3.0.0"
        target="_blank"
        rel="noopener noreferrer"
        class="game-download-button"
      >
        <span class="button-icon">🎮</span>
        BAIXAR JOGO
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.game-download-container {
  text-align: center;
  margin: 20px;
}

.game-download-button {
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  border: 2px solid #2980b9;
  transition: background-color 0.3s;
}

.game-download-button:hover {
  background-color: #2980b9;
}
</style>
