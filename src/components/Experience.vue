<template>
  <!-- Experience Section -->
  <section class="section">
      <ExperienceComponent/>
      <h2 class="section-title">{{ content.experience.title }}</h2>
      <div class="section-divider"></div>
      <div class="experience-card" v-for="(item, index) in content.experience.items" :key="'exp-'+index">
        <div class="experience-period">{{ item.period }}</div>
        <div class="experience-details">
          <h3>{{ item.position }}</h3>
          <p class="company">{{ item.company }}</p>
          <ul class="responsibilities">
            <li v-for="(duty, dutyIndex) in item.responsibilities" :key="'duty-'+dutyIndex">{{ duty }}</li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted} from 'vue'

// Language data
const contentData = {
  en: {
    experience: {
      title: "Experience",
      items: [
        {
          period: "2022 - Present",
          position: "Front-End Developer",
          company: "Tech Company Inc.",
          responsibilities: [
            "Developed responsive web applications using Vue.js and Tailwind CSS",
            "Collaborated with UX team to implement design systems",
            "Improved website performance by 40% through code optimization"
          ]
        },
        {
          period: "2020 - 2022",
          position: "Web Development Intern",
          company: "Startup Studio",
          responsibilities: [
            "Assisted in developing website components using HTML, CSS, and JavaScript",
            "Contributed to the company's open-source projects",
            "Participated in weekly code reviews and learning sessions"
          ]
        }
      ]
    }
  },
  zh: {
    experience: {
      title: "工作經驗",
      items: [
        {
          period: "2022 - 至今",
          position: "前端開發者",
          company: "科技公司",
          responsibilities: [
            "使用Vue.js和Tailwind CSS開發響應式網頁應用",
            "與UX團隊合作實施設計系統",
            "通過代碼優化提高網站性能40%"
          ]
        },
        {
          period: "2020 - 2022",
          position: "網頁開發實習生",
          company: "新創工作室",
          responsibilities: [
            "協助使用HTML、CSS和JavaScript開發網站組件",
            "為公司的開源項目做出貢獻",
            "參與每週代碼審查和學習課程"
          ]
        }
      ]
    },
  },
  ja: {
    experience: {
      title: "職歴",
      items: [
        {
          period: "2022 - 現在",
          position: "フロントエンド開発者",
          company: "テック企業株式会社",
          responsibilities: [
            "Vue.jsとTailwind CSSを使用した応答性の高いウェブアプリケーションを開発",
            "UXチームと協力してデザインシステムを実装",
            "コード最適化によりウェブサイトのパフォーマンスを40％向上"
          ]
        },
        {
          period: "2020 - 2022",
          position: "ウェブ開発インターン",
          company: "スタートアップスタジオ",
          responsibilities: [
            "HTML、CSS、JavaScriptを使用したウェブサイトコンポーネントの開発を支援",
            "会社のオープンソースプロジェクトに貢献",
            "週次のコードレビューと学習セッションに参加"
          ]
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

/* Experience Styles */
.experience-card {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #E6D2B5;
}

.experience-card:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.experience-period {
  flex: 0 0 120px;
  font-weight: bold;
  color: #7D8C75; /* Grey-Green color */
}

.experience-details h3 {
  margin-bottom: 0.5rem;
  color: #4A4A4A;
}

.company {
  margin-bottom: 1rem;
  font-style: italic;
  color: #666;
}

.responsibilities {
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.responsibilities li {
  margin-bottom: 0.5rem;
}

</style>
