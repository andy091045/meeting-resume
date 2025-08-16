<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <MyPhoto/>
      <!-- <div class="profile-image"></div> -->
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
import MyPhoto from '../components/icons/MyPhoto.vue'

// Language data
const contentData = {
  en: {
    hero: {
      name: "WEI-CHE HSU",
      title: "Web Developer, Game Developer",
      description: "A web developer focused on functionality and user experience, and also a passionate game creator."
    },
  },
  zh: {
    hero: {
      name: "許瑋哲",
      title: "網頁開發者, 遊戲開發者",
      description: "專注於功能與體驗的網頁開發者，同時也是熱情的遊戲創作者。"
    }, 
  },
  ja: {
    hero: {
      name: "許瑋哲 (WEI-CHE HSU)",
      title: "ウェブ開発者、　ゲーム開発者",
      description: "機能性とユーザー体験に重点を置いたWeb開発者であり、情熱的なゲームクリエイターでもあります。"
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
  max-width: 1000px;
}
</style>