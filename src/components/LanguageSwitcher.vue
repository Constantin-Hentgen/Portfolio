<template>
  <button
    @click.prevent="toggleLocale(), fetchContent()"
    class="bg-myBlue-900 rounded-md w-40 md:w-56 h-10 mx-auto text-myBlue-200 text-sm md:text-lg font-semibold shadow-md"
  >
      {{ getTranslationSuggestion() }}
  </button>
</template>

<script>
import { marked } from 'marked'

export default {
  methods: {
		fetchContent() {
			if (this.$route.path.includes("project/")) {
				let freshArticle = marked(atob(this.$t(`projects.${this.$route.name}.extendedContent`)))
				document.getElementById("article").innerHTML = freshArticle
			}
		},
    toggleLocale() {
      this.$router.push({
        params: {
          lang: this.$i18n.locale == "en" ? "fr" : "en" 
        }
      })
    },
    getTranslationSuggestion() {
      return this.$i18n.locale === "fr" ? "translate to english" : "traduire en français";
    }
  }
}
</script>
