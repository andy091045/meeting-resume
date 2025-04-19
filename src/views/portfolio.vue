<template>
  <div class="portfolio-container">
    <h1 class="portfolio-title">{{ content.title }}</h1>
    <div class="portfolio-description">
      <p>{{ content.description }}</p>
    </div>
    
    <div class="projects-grid">
      <!-- Project Cards -->
      <div class="project-card" v-for="(project, index) in content.projects" :key="'project-'+index">
        <div class="project-image" style="background-color: #A89B8C;"></div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span class="project-tag" v-for="(tag, tagIndex) in project.tags" :key="'tag-'+tagIndex">{{ tag }}</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">{{ content.viewProject }}</a>
            <a href="#" class="project-link">{{ content.viewCode }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Language data
const contentData = {
  en: {
    title: "My Projects",
    description: "A showcase of my recent work and personal projects. Each project demonstrates different skills and technologies I've worked with.",
    viewProject: "View Project",
    viewCode: "View Code",
    projects: [
      {
        title: "E-commerce Website",
        description: "A full-featured online store with product catalog, shopping cart, and payment processing.",
        tags: ["Vue.js", "Node.js", "MongoDB"]
      },
      {
        title: "Weather Dashboard",
        description: "A real-time weather application that shows current conditions and forecasts for any location.",
        tags: ["React", "Weather API", "CSS Grid"]
      },
      {
        title: "Task Management App",
        description: "A productivity application to help users organize tasks, set deadlines, and track progress.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"]
      },
      {
        title: "Personal Blog",
        description: "A technical blog where I share my thoughts and insights on web development and design.",
        tags: ["Nuxt.js", "Markdown", "Netlify CMS"]
      }
    ]
  },
  zh: {
    title: "我的專案",
    description: "展示我最近的作品和個人項目。每個項目都展示了我使用的不同技能和技術。",
    viewProject: "查看專案",
    viewCode: "查看代碼",
    projects: [
      {
        title: "電子商務網站",
        description: "功能齊全的在線商店，具有產品目錄、購物車和支付處理功能。",
        tags: ["Vue.js", "Node.js", "MongoDB"]
      },
      {
        title: "天氣儀表板",
        description: "實時天氣應用程式，顯示任何位置的當前天氣狀況和預報。",
        tags: ["React", "Weather API", "CSS Grid"]
      },
      {
        title: "任務管理應用",
        description: "幫助用戶組織任務、設定截止日期和跟踪進度的生產力應用程式。",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"]
      },
      {
        title: "個人部落格",
        description: "分享我對網頁開發和設計的想法和見解的技術部落格。",
        tags: ["Nuxt.js", "Markdown", "Netlify CMS"]
      }
    ]
  },
  ja: {
    title: "プロジェクト",
    description: "最近の作品や個人プロジェクトのショーケースです。各プロジェクトは私が使用するさまざまなスキルと技術を紹介しています。",
    viewProject: "プロジェクトを見る",
    viewCode: "コードを見る",
    projects: [
      {
        title: "Eコマースウェブサイト",
        description: "商品カタログ、ショッピングカート、決済処理を備えた機能満載のオンラインストア。",
        tags: ["Vue.js", "Node.js", "MongoDB"]
      },
      {
        title: "天気ダッシュボード",
        description: "任意の場所の現在の状況と予報を表示するリアルタイム天気アプリケーション。",
        tags: ["React", "Weather API", "CSS Grid"]
      },
      {
        title: "タスク管理アプリ",
        description: "ユーザーがタスクを整理し、期限を設定し、進捗を追跡するのを支援する生産性アプリケーション。",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"]
      },
      {
        title: "個人ブログ",
        description: "ウェブ開発とデザインに関する考えや洞察を共有する技術ブログ。",
        tags: ["Nuxt.js", "Markdown", "Netlify CMS"]
      }
    ]
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
.portfolio-container {
  background-color: #E6D2B5; /* Light coffee background */
  min-height: 100vh;
  padding: 2rem;
  color: #4A4A4A; /* Dark grey text */
}

.portfolio-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4A4A4A;
  text-align: center;
}

.portfolio-description {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 0.5rem;
  color: #4A4A4A;
  font-size: 1.3rem;
}

.project-content p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tag {
  background-color: #7D8C75; /* Grey-Green color */
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  background-color: #A89B8C; /* Medium earth tone */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #97897c; /* Darker earth tone */
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

