<template>
  <button
    @click.prevent="toggleLocale(), fetchContent()"
    class="bg-myBlue-900 rounded-full w-20 h-10 mx-auto text-myBlue-200"
  >
    <span> {{ $i18n.locale.toUpperCase() }} </span>
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
      let newLocale = this.$i18n.locale == "en" ? "fr" : "en";

      this.$router.push({
        params: {
          lang: newLocale 
        }
      })
    }
  }
}
</script>
