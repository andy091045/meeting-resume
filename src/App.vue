<template>
  <div id="app">
    <NavBar />
    <router-view />
    <footer class="footer">
      <p>© 2025 WHE-CHE Hsu. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #4A4A4A;
  background-color: #E6D2B5; /* Light coffee background */
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  background-color: #7D8C75; /* Grey-Green color */
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
</style>