<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="profile-image"></div>
      <div class="hero-content">
        <h1>{{ content.hero.name }}</h1>
        <h2>{{ content.hero.title }}</h2>
        <p>{{ content.hero.description }}</p>
      </div>
    </section>

    <EducationComponent/>
    <ExperienceComponent/>
    <SkillsComponent/>
    <ContactComponent/>    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import EducationComponent from '../components/Education.vue'
import ExperienceComponent from '../components/Experience.vue'
import SkillsComponent from '../components/Skills.vue'
import ContactComponent from '../components/Contact.vue'

// Language data
const contentData = {
  en: {
    hero: {
      name: "Your Name",
      title: "Web Developer",
      description: "Passionate web developer with a focus on creating intuitive and engaging user experiences."
    },
  },
  zh: {
    hero: {
      name: "您的名字",
      title: "網頁開發者",
      description: "熱情的網頁開發者，專注於創建直觀且引人入勝的用戶體驗。"
    }, 
  },
  ja: {
    hero: {
      name: "あなたの名前",
      title: "ウェブ開発者",
      description: "直感的で魅力的なユーザー体験の創造に焦点を当てた情熱的なウェブ開発者。"
    },    
  }
}

// Get language from sessionStorage and set default
const language = ref('en')

onMounted(() => {
  const storedLanguage = sessionStorage.getItem('language') || 'en'
  language.value = storedLanguage
})

// Watch for sessionStorage changes
const checkLanguage = () => {
  const storedLanguage = sessionStorage.getItem('language') || 'en'
  language.value = storedLanguage
}

// Check for language changes every second
setInterval(checkLanguage, 1000)

const content = computed(() => {
  return contentData[language.value]
})
</script>

<style scoped>
.home-container {
  background-color: #E6D2B5; /* Light coffee background */
  color: #4A4A4A; /* Dark grey text */
  min-height: 100vh;
  padding: 2rem;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #A89B8C; /* Medium earth tone */
  border: 3px solid white;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #4A4A4A;
}

.hero-content h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #7D8C75; /* Grey-Green color */
}

.hero-content p {
  font-size: 1.1rem;
  max-width: 600px;
}
</style>