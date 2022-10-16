<template>
	<div class="relative flex justify-center">
		<ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="absolute left-0 bottom-10 normal-case z-30 font-normal xs:left-0 lg:right-0 text-myBlue-200 bg-myBlue-900 shadow overflow-hidden rounded-md w-28 mt-2 py-1 lg:z-20">
			<li v-if="$i18n.locale != 'en'">
				<a
					@click.prevent="setLocale('en'), fetchContent()"
					class="flex items-center px-3 py-3 hover:underline"
					@keydown.esc.exact="hideDropdown"
				>
					<span class="ml-2">English</span>
				</a>
			</li>
	
			<li>
				<a v-if="$i18n.locale != 'fr'"
					@click.prevent="setLocale('fr'), fetchContent()"
					class="flex items-center px-3 py-3 hover:underline"
					@keydown.esc.exact="hideDropdown"
				>
					<span class="ml-2">Français</span>
				</a>
			</li>
		</ul>
    <button
      href="#"
      class="flex items-center focus:outline-none bg-transparent"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </button>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import { marked } from 'marked'

export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    }
  },
  methods: {
		fetchContent() {
			if (this.$route.path.includes("project/")) {
				let freshArticle = marked(atob(this.$t(`projects.${this.$route.name}.extendedContent`)))
				document.getElementById("article").innerHTML = freshArticle
				// old way because of the cross page targeting
			}
		},
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active, .dropdown-fade-leave-active {
	transition: all .1s ease-in-out;
}
.dropdown-fade-enter, .dropdown-fade-leave-to {
	opacity: 0;
	transform: translateY(12px);
}
</style>

