<template>
  <h1
    style="
      font-weight: bold;
      font-size: 40px;
      font-family: 'Rubik Mono One', monospace;
    "
  >
    DESENVOLVEDORES
  </h1>
  <div class="devs">
    <ul class="developer-list">
      <li>
        <img src="/src/assets/mateus.jpeg" alt="Dev 1" class="avatar" />
        <div class="info">
          <h2 style="font-weight: bold">Mateus Alves Araujo</h2>
          <p class="github_logo">Descrição simples do Dev 1.</p>
          <a
            class="github_logo"
            href="https://github.com/MateusAlvez"
            target="_blank"
          >
            <img src="/src/assets/github-logo.png" alt="GitHub" />
          </a>
        </div>
      </li>

      <li>
        <img src="/src/assets/erick.jpg" alt="Dev 2" class="avatar" />
        <div class="info">
          <h2 style="font-weight: bold">Érick Santos Marçal</h2>
          <p class="github_logo">Descrição simples do Dev 2.</p>
          <a
            class="github_logo"
            href="https://github.com/erarich"
            target="_blank"
          >
            <img src="/src/assets/github-logo.png" alt="GitHub" />
          </a>
        </div>
      </li>
      <li>
        <img src="/src/assets/wilque.jpeg" alt="Dev 2" class="avatar" />
        <div class="info">
          <h2 style="font-weight: bold">Wilque Muriel do Nascimento Coelho</h2>
          <p class="github_logo">Descrição simples do Dev 2.</p>
          <a href="https://github.com/uiuqM" target="_blank">
            <img src="/src/assets/github-logo.png" alt="GitHub" />
          </a>
        </div>
      </li>
      <li>
        <img src="/src/assets/sophia.jpeg" alt="Dev 2" class="avatar" />
        <div class="info">
          <h2 style="font-weight: bold">Sophia Menezes Pontes</h2>
          <p class="github_logo">Descrição simples do Dev 2.</p>
          <a href="https://github.com/SophiaMenezes" target="_blank">
            <img src="/src/assets/github-logo.png" alt="GitHub" />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");

.devs {
  background-color: #f4f4f4;
}

.developer-list {
  list-style-type: none;
  display: flex;
  gap: 80px;
}

.developer-list li {
  margin: 10px;
  text-align: center;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.info {
  margin-top: 10px;
}

.info h2 {
  margin-bottom: 5px;
}

.info a img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.github_logo {
  margin-bottom: 15px;
}
</style>
