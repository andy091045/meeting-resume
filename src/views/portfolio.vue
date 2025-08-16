<template>
  <div class="portfolio-container">
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>

    <div class="projects-grid">
      <div
        v-for="(project, index) in paginatedProjects"
        :key="index"
        class="project-card"
      >
        <h3>{{ project.title }}</h3>
        <p>{{ project.preview }}</p>
        <button @click="goDetail(project.title)">View Detail</button>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 語言資料
const contentData = {
  en: { title: "My Projects", description: "A showcase of my projects." },
  zh: { title: "我的專案", description: "展示我最近的作品和個人項目。" },
  ja: { title: "プロジェクト", description: "最近の作品や個人プロジェクトのショーケースです。" }
}

const language = ref(sessionStorage.getItem('language') || 'en')
const content = computed(() => contentData[language.value])

// 每秒檢查語言變更
setInterval(() => {
  const stored = sessionStorage.getItem('language') || 'en'
  if (language.value !== stored) language.value = stored
}, 500)

// 讀取 Markdown
const allProjects = ref([])
const loadProjects = async () => {
  const modules = import.meta.glob('./projects/*.md', { eager: true, query: '?raw', import: 'default' })
  allProjects.value = Object.entries(modules).map(([path, md]) => ({
    title: path.split('/').pop().replace('.md', ''),
    preview: md.split('\n').slice(0, 3).join(' '),
    content: md
  }))
}
onMounted(loadProjects)

// 分頁
const itemsPerPage = 2
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(allProjects.value.length / itemsPerPage))
const paginatedProjects = computed(() =>
  allProjects.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
)

// Router 跳轉
const router = useRouter()
const goDetail = (projectTitle) => {
  router.push({ name: 'ProjectDetail', params: { projectName: projectTitle } })
}
</script>

<style scoped>
.portfolio-container {
  background-color: #E6D2B5;
  min-height: 100vh;
  padding: 2rem;
  color: #4A4A4A;
}

.portfolio-container > * {
  margin-bottom: 2rem; /* 元素之間的距離 */
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}
.project-card {
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
}
.project-card h3 {
  margin-bottom: 0.5rem;
}
.project-card button {
  padding: 0.5rem 1rem;
  background-color: #7D8C75;
  color: white;
  border: none;
  cursor: pointer;
}
.pagination {
  margin-top: 2rem;
  text-align: center;
}
.pagination button {
  margin: 0 0.3rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #7D8C75;
  color: white;
  cursor: pointer;
}
.pagination button.active {
  background-color: #4A4A4A;
}
</style>
