<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo and Title -->
      <div class="nav-brand">
        <span class="name">WEI-CHE HSU</span>
        <span class="title">Web Developer, Game Developer</span>
      </div>
      <div class="nav-links">
        <router-link to="/meeting-resume" class="nav-link">
          {{ 
            currentLanguage === 'en' ? 'Home' : 
            currentLanguage === 'zh' ? '首頁' : 'ホーム'
          }}
        </router-link>
        <router-link to="/portfolio" class="nav-link">
          {{ 
            currentLanguage === 'en' ? 'Portfolio' : 
            currentLanguage === 'zh' ? '作品集' : 'ポートフォリオ'
          }}
        </router-link>
        <div class="language-select">
          <select v-model="currentLanguage" @change="changeLanguage" class="language-dropdown">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>     
    </div>
  </nav>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'

const currentLanguage = ref('en')

// Initialize language from sessionStorage or default to English
onMounted(() => {
  const storedLanguage = sessionStorage.getItem('language') || 'en'
  currentLanguage.value = storedLanguage
})

// Change language and store in sessionStorage
const changeLanguage = () => {
  sessionStorage.setItem('language', currentLanguage.value)
}

// Make currentLanguage available to the parent component
defineExpose({ currentLanguage })
</script>

<style scoped>
.navbar {
  background-color: #7D8C75; /* Grey-Green color */
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  flex-direction: column;
}

.name {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.title {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-link:hover:after {
  width: 100%;
}

.router-link-active {
  font-weight: bold;
}

.router-link-active:after {
  width: 100%;
}

/* Language Select Styles */
.language-select {
  margin-left: 1rem;
}

.language-dropdown {
  background-color: #A89B8C; /* Medium earth tone */
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
}

.language-dropdown option {
  background-color: #fff;
  color: #4A4A4A;
}
</style>