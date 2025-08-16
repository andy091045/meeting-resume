<template>
  <!-- Skills Section -->
  <section class="section">
    <SkillsComponent />
    <h2 class="section-title">{{ content.skills.title }}</h2>
    <div class="section-divider"></div>
    <div class="skills-container">
      <div class="skill-category" v-for="(category, index) in content.skills.categories" :key="'skill-' + index">
        <h3>{{ category.name }}</h3>
        <div class="skills-tags">
          <span class="skill-tag" v-for="(skill, skillIndex) in category.skills" :key="'tag-' + skillIndex">{{ skill
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Language data
const contentData = {
  en: {
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Frontend Development",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
          name: "Backend Development",
          skills: ["Node.js", "Python", "Django", "Firebase"]
        },
        {
          name: "Game Development",
          skills: ["C#", "Unity", "App Deployment", "Firebase"]
        },
        {
          name: "Tools & Platforms",
          skills: ["Git", "VS Code", "Visual Studio", "RPA System"]
        }
      ]
    }
  },
  zh: {
    skills: {
      title: "技能",
      categories: [
        {
          name: "網頁前端",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
          name: "網頁後端",
          skills: ["Node.js", "Python", "Django", "Firebase"]
        },
        {
          name: "遊戲開發",
          skills: ["C#", "Unity", "App 上架", "Firebase"]
        },
        {
          name: "工具與平台",
          skills: ["Git", "VS Code", "Visual Studio", "RPA 系統"]
        }
      ]
    }
  },
  ja: {
    skills: {
      title: "スキル",
      categories: [
        {
          name: "フロントエンド開発",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
          name: "バックエンド開発",
          skills: ["Node.js", "Python", "Django", "Firebase"]
        },
        {
          name: "ゲーム開発",
          skills: ["C#", "Unity", "アプリ公開", "Firebase"]
        },
        {
          name: "ツール・プラットフォーム",
          skills: ["Git", "VS Code", "Visual Studio", "RPAシステム"]
        }
      ]
    }
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
.section {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.8rem;
  color: #4A4A4A;
  margin-bottom: 0.5rem;
}

.section-divider {
  height: 3px;
  width: 80px;
  background-color: #7D8C75;
  /* Grey-Green color */
  margin-bottom: 1.5rem;
}

/* Skills Styles */
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: #7D8C75;
  /* Grey-Green color */
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #A89B8C;
  /* Medium earth tone */
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
}
</style>