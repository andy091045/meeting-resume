<template>
  <!-- Experience Section -->
  <section class="section">
    <ExperienceComponent />
    <h2 class="section-title">{{ content.experience.title }}</h2>
    <div class="section-divider"></div>
    <div class="experience-card" v-for="(item, index) in content.experience.items" :key="'exp-' + index">
      <div class="experience-period">{{ item.period }}</div>
      <div class="experience-details">
        <h3>{{ item.position }}</h3>
        <p class="company">{{ item.company }}</p>
        <ul class="responsibilities">
          <li v-for="(duty, dutyIndex) in item.responsibilities" :key="'duty-' + dutyIndex">{{ duty }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Language data
const contentData = {
  en: {
    experience: {
      title: "Experience",
      items: [
        {
          period: "2024 - Present",
          position: "Software Engineer",
          company: "Compal Electronics, Inc.",
          responsibilities: [
            "Implemented automated web data extraction and report generation with integrated chart visualization, and delivered scheduled summary emails",
            "Built a mail-agent system enabling AI-driven automated email composition and dispatch",
            "Developed a visual dashboard for port usage, along with port management tools and one-click server startup for the entire web system",
            "Developed interactive frontend applications using Vue.js",
            "Built backend APIs with Python Django and integrated MySQL databases",
            "Collaborated with cross-functional teams to build internal IT systems",
            "Developed internal tools to improve laptop testing efficiency",
            "Optimized code to improve website loading speed by 30%",            
          ]
        },
        {
          period: "2023 - 2023",
          position: "Game Development Intern",
          company: "TOYDEA",
          responsibilities: [
            "Designed and developed prototypes for various game types",
            "Contributed to the development of subsystems in large-scale projects",
            "Participated in weekly code reviews and received mentorship from senior developers",
            "Managed and prioritized game data structures"
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
          period: "2024 - 至今",
          position: "軟體工程師",
          company: "仁寶電腦工業股份有限公司",
          responsibilities: [
            "開發自動化網頁資料抓取工具，整合圖表並生成報表，自動寄送定期統整信件",
            "建置 Mail Agent 系統，使 AI 能夠自動產生信件內容並完成寄送流程",
            "打造 Port 使用狀況可視化介面，並提供 Port 管理與一鍵啟動全站伺服器等功能",
            "使用 Vue.js 開發互動式前端網站",
            "以 Python Django 開發後端 API，並串接 MySQL 資料庫",
            "跨部門合作建置公司內部 IT 系統",
            "開發提升筆電測試效率的內部工具",
            "透過程式碼優化，提升網站載入速度達 30%",
          ]
        },
        {
          period: "2023 - 2023",
          position: "遊戲程式開發實習生",
          company: "TOYDEA",
          responsibilities: [
            "設計並開發不同類型的遊戲原型",
            "協助大型專案中特定系統模組的開發",
            "參與每週程式碼審查並接受資深工程師指導",
            "處理遊戲資料的優先級排序與結構優化"
          ]
        }
      ]
    }
  },

  ja: {
    experience: {
      title: "職務経歴",
      items: [
        {
          period: "2024年 ～ 現在",
          position: "ソフトウェアエンジニア",
          company: "コンパル電子株式会社",
          responsibilities: [
            "Webデータの自動収集・分析基盤を構築し、チャート化したレポートを自動生成・定期メールで配信",
            "AIが自動でメール文面を生成し送信できるMail Agentシステムを構築",
            "Port の使用状況を可視化するダッシュボードを構築し、Port 管理機能や Web システム全体をワンクリックで起動できる機能を実装",
            "Vue.jsを用いたインタラクティブなフロントエンドアプリを開発",
            "Python DjangoでバックエンドAPIを構築し、MySQLと連携",
            "部署横断のチームと協力し、社内ITシステムを構築",
            "ノートパソコンのテスト効率を向上させる社内ツールを開発",
            "コード最適化により、Webサイトの読み込み速度を30％向上",            
          ]
        },
        {
          period: "2023年",
          position: "ゲーム開発インターン",
          company: "TOYDEA",
          responsibilities: [
            "さまざまなジャンルのゲームプロトタイプを設計・開発",
            "大型プロジェクトの一部システム開発に貢献",
            "毎週のコードレビューに参加し、先輩エンジニアから指導を受ける",
            "ゲーム内データの優先順位を管理・最適化"
          ]
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
  color: #7D8C75;
  /* Grey-Green color */
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
