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
            "Responsible for building a RAG system, researching suitable embedding models, and rapidly deploying a RAG architecture within two months using the RAGFlow framework, packaged as a Docker image.",
            "Developed AI Agent projects, contributing to the construction of an AI Agent framework (AutoGen) and implementing several agents (Mail Agent, Remote Tool Agent, RAG Agent).",
            "Developed four web applications for internal teams, including two AI chatbot systems and two data management systems.",
            "Maintained three web applications, upgrading frameworks (Vue 2 → Vue 3) and refactoring code for optimization.",
            "Built a port usage visualization interface with features for port management and one-click full-site server startup.",
            "Improved website loading speed by 30% through code optimization.",
            "Conducted hardware validation tests for Intel EVO Certification laptops."
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
            "負責RAG系統建置，研究適合的Embedding模型，並使用RAGFlow框架在兩個月內快速佈署RAG架構，並打包docker image",
            "開發AI Agent專案，參與AI Agent框架(Autogen)的建設，以及部分Agent(Mail Agent, Remote Tool Agent, RAG Agent)的開發",
            "開發4款給功能團隊使用的網頁系統，其中包含兩款AI聊天專案和兩款資料管理類型專案。",
            "維護3款網頁專案，進行框架升級(Vue2 -> Vue3)，並重構優化部分程式",
            "打造 Port 使用狀況可視化介面，並提供 Port 管理與一鍵啟動全站伺服器等功能",
            "透過程式碼優化，提升網站載入速度達 30%",
            "筆電 Intel EVO Certification 硬體測試",
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
            "RAGシステムの構築を担当し、適切なEmbeddingモデルの選定・検証を行い、RAGFlowフレームワークを用いて2ヶ月以内にRAGアーキテクチャを迅速に構築し、Dockerイメージとしてパッケージ化しました。",
            "AIエージェントプロジェクトを開発し、AIエージェントフレームワーク（AutoGen）の構築に参画するとともに、複数のエージェント（Mail Agent、Remote Tool Agent、RAG Agent）の開発を担当しました。",
            "社内チーム向けに4つのWebシステムを開発し、そのうち2つはAIチャットシステム、2つはデータ管理システムです。",
            "3つのWebアプリケーションの保守を担当し、フレームワークのアップグレード（Vue2 → Vue3）およびコードのリファクタリング・最適化を実施しました。",
            "Port使用状況の可視化インターフェースを構築し、Port管理およびワンクリックでのサーバー起動機能を実装しました。",
            "コード最適化により、Webサイトの読み込み速度を30％向上させました。",
            "Intel EVO認証に関わるノートPCのハードウェア検証テストを実施しました。"
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
