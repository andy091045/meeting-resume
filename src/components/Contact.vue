<template>
  <section class="section">      
    <h2 class="section-title">{{ content.contact.title }}</h2>
    <div class="section-divider"></div>
    <div class="contact-container">
      <div class="contact-info">
        <p><strong>{{ content.contact.email.label }}:</strong> {{ content.contact.email.value }}</p>
        <p><strong>{{ content.contact.phone.label }}:</strong> {{ content.contact.phone.value }}</p>
        <p><strong>{{ content.contact.location.label }}:</strong> {{ content.contact.location.value }}</p>
      </div>
      <div class="social-links">
        <a
          v-for="(link, index) in content.contact.socialLinks"
          :key="'social-' + index"
          :href="link.url"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted} from 'vue'

// Language data
const contentData = {
  en: {
    contact: {
      title: "Contact",
      email: {
        label: "Email",
        value: "andy091045@gmail.com"
      },
      phone: {
        label: "Phone",
        value: "(886) 0910-410-484"
      },
      location: {
        label: "Location",
        value: "New Taipei City, Taiwan (R.O.C.)"
      },
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andy091045/" },
        { name: "GitHub", url: "https://github.com/andy091045" }
      ]
    }
  },
  zh: {
    contact: {
      title: "聯絡方式",
      email: {
        label: "電子郵件",
        value: "andy091045@gmail.com"
      },
      phone: {
        label: "電話",
        value: "(886) 0910-410-484"
      },
      location: {
        label: "位置",
        value: "新北市, 台灣"
      },
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andy091045/" },
        { name: "GitHub", url: "https://github.com/andy091045" }
      ]
    }
  },
  ja: {
    contact: {
      title: "連絡先",
      email: {
        label: "メール",
        value: "andy091045@gmail.com"
      },
      phone: {
        label: "電話",
        value: "(886) 0910-410-484"
      },
      location: {
        label: "所在地",
        value: "新北, 台湾"
      },
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andy091045/" },
        { name: "GitHub", url: "https://github.com/andy091045" }
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
  background-color: #7D8C75; /* Grey-Green color */
  margin-bottom: 1.5rem;
}

/* Contact Styles */
.contact-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact-info, .social-links {
  flex: 1;
  min-width: 250px;
}

.contact-info p {
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  background-color: #7D8C75;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-flex;        /* 讓內容水平置中 */
  align-items: center;         /* 垂直置中 */
  justify-content: center;
  line-height: 1;              /* 避免多餘行高 */
  height: auto;                /* 防止外層撐高 */
  font-size: 1rem;
}


.social-link:hover {
  background-color: #6b7a64; /* Darker Grey-Green */
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .education-card, .experience-card {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .education-period, .experience-period {
    margin-bottom: 0.5rem;
  }
}
</style>