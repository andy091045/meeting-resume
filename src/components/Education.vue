<template>
    <!-- Education Section -->
    <section class="section">
      <EducationComponent/>
      <h2 class="section-title">{{ content.education.title }}</h2>
      <div class="section-divider"></div>
      <div class="education-card" v-for="(item, index) in content.education.items" :key="'edu-'+index">
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
import { ref, computed, onMounted} from 'vue'

// Language data
const contentData = {
  en: {
    education: {
      title: "Education",
      items: [
        {
          period: "2018 - 2022",
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          gpa: "GPA: 3.8/4.0"
        },
        {
          period: "2016 - 2018",
          degree: "Associate Degree in Web Development",
          institution: "College Name"
        }
      ]
    },
  },
  zh: {
    education: {
      title: "學歷",
      items: [
        {
          period: "2018 - 2022",
          degree: "計算機科學學士",
          institution: "大學名稱",
          gpa: "GPA: 3.8/4.0"
        },
        {
          period: "2016 - 2018",
          degree: "網頁開發副學士",
          institution: "學院名稱"
        }
      ]
    },
  },
  ja: {
    education: {
      title: "学歴",
      items: [
        {
          period: "2018 - 2022",
          degree: "コンピュータサイエンス学士",
          institution: "大学名",
          gpa: "GPA: 3.8/4.0"
        },
        {
          period: "2016 - 2018",
          degree: "ウェブ開発準学士",
          institution: "カレッジ名"
        }
      ]
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
  background-color: #7D8C75; /* Grey-Green color */
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
  color: #7D8C75; /* Grey-Green color */
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