<template>
  <div class="project-detail">
    <h1>{{ project.title }}</h1>
    <div v-html="projectContent" class="markdown-body"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed} from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

// Markdown 解析器，支援程式碼高亮
const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${mdParser.utils.escapeHtml(str)}</code></pre>`
  }
})

const route = useRoute()
const projectName = route.params.projectName

const project = ref({ title: projectName, content: '' })
const translatedContent = ref('')
const selectedLang = ref(sessionStorage.getItem('language') || 'zh-TW')

// 載入 markdown
const modules = import.meta.glob('./projects/*.md', { eager: true, query: '?raw', import: 'default' })

async function loadProject() {
  const mdPath = `./projects/${projectName}.md`
  if (modules[mdPath]) {
    project.value.content = modules[mdPath]
    await translateContent()
  } else {
    project.value.content = '# Project not found'
    translatedContent.value = project.value.content
  }
}

// 計算渲染的 HTML
const projectContent = computed(() => mdParser.render(translatedContent.value))

// 翻譯文字節點，保留 HTML，跳過 code / pre
async function translateContent() {
  const html = mdParser.render(project.value.content)
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  async function traverse(node) {
    for (const child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE && ['CODE', 'PRE'].includes(child.tagName)) continue

      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.nodeValue.trim()
        if (text) {
          try {
            const translated = await translateText(text, selectedLang.value)
            child.nodeValue = translated
          } catch (e) {
            console.error('翻譯失敗:', e)
          }
        }
      } else if (child.childNodes.length) {
        await traverse(child)
      }
    }
  }

  await traverse(doc.body)
  translatedContent.value = doc.body.innerHTML
}

// Google 翻譯 API
async function translateText(text, targetLang) {  
  if(targetLang == 'zh'){
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-TW&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url)
    const data = await res.json()
    return data[0].map(seg => seg[0]).join('')
  }
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  const data = await res.json()
  return data[0].map(seg => seg[0]).join('')
}

// 初始載入
onMounted(() =>{
  loadProject()
   window.addEventListener('language-changed', (e) => {
    selectedLang.value = e.detail
    translateContent()
  })
})

</script>

<style scoped>
.project-detail {
  background-color: #E6D2B5;
  min-height: 100vh;
  padding: 2rem;
  color: #4A4A4A;
}

/* Markdown 樣式 */
.markdown-body {
  line-height: 1.8;
  color: #4A4A4A;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin: 1rem 0 0.5rem;
}
.markdown-body p {
  margin-bottom: 1rem;
}
.markdown-body img {
  max-width: 100%;
  margin: 1rem 0;
}
.markdown-body a {
  color: #7D8C75;
  text-decoration: underline;
}
.markdown-body ul,
.markdown-body ol {
  margin: 0.5rem 0 1rem 2rem;
}

/* 內聯程式碼 */
.markdown-body code {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Source Code Pro', monospace;
}

/* 多行程式碼區塊 */
.markdown-body pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Source Code Pro', monospace;
}

/* Highlight.js 顏色 */
.hljs {
  background: #1e1e1e;
  color: #d4d4d4;
}
</style>
