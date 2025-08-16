<template>
  <!-- Education Section -->
  <section class="section">
    <EducationComponent />
    <h2 class="section-title">{{ content.education.title }}</h2>
    <div class="section-divider"></div>
    <div class="education-card" v-for="(item, index) in content.education.items" :key="'edu-' + index">
      <div class="education-period">{{ item.period }}</div>
      <div class="education-details">
        <h3>{{ item.degree }}</h3>
        <p>{{ item.institution }}</p>
        <p v-if="item.gpa">{{ item.gpa }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Language data
const contentData = {
  en: {
    education: {
      title: "Education",
      items: [
        {
          period: "2021 - 2024",
          degree: "Master of Computer Science",
          institution: "National Taipei University of Technology",
          gpa: "GPA: 3.7/4.0"
        },
        {
          period: "2018 - 2021",
          degree: "Bachelor of Digital Design and Technology",
          institution: "National Taipei University of Education"
        }
      ]
    },
  },
  zh: {
    education: {
      title: "學歷",
      items: [
        {
          period: "2021 - 2024",
          degree: "資訊工程系碩士",
          institution: "國立臺北科技大學",
          gpa: "GPA: 3.8/4.0"
        },
        {
          period: "2018 - 2021",
          degree: "數位設計科技學系學士",
          institution: "國立臺北教育大學"
        }
      ]
    },
  },
  ja: {
    education: {
      title: "学歴",
      items: [
        {
          period: "2021年 ～ 2024年",
          degree: "コンピューターサイエンス・情報工学 修士",
          institution: "国立台北科技大学",
          gpa: "GPA：3.8 / 4.0"
        },
        {
          period: "2018年 ～ 2021年",
          degree: "デジタルデザイン技術学科 学士",
          institution: "国立台北教育大学"
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

/* Education Styles */
.education-card {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #E6D2B5;
}

.education-card:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.education-period {
  flex: 0 0 120px;
  font-weight: bold;
  color: #7D8C75;
  /* Grey-Green color */
}

.education-details h3 {
  margin-bottom: 0.5rem;
  color: #4A4A4A;
}

.education-details p {
  margin: 0.25rem 0;
  color: #666;
}
</style>