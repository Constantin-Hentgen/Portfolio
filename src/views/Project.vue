<template>
  <div>
		<header class="bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
			<nav class="container mx-auto px-8 flex flex-row bg-transparent font-bold justify-center space-x-5 items-center py-8">
				<div class="relative">
					<button
						href="#"
						class="flex items-center focus:outline-none bg-white"
						@click="toggleVisibility"
						@keydown.space.exact.prevent="toggleVisibility"
						@keydown.esc.exact="hideDropdown"
						@keydown.shift.tab="hideDropdown"
						@keydown.up.exact.prevent="startArrowKeys"
						@keydown.down.exact.prevent="startArrowKeys"
					>
						<img :src="`/flag_${$i18n.locale}.svg`" alt="flag" class="w-8 h-8">
						<span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
					</button>

					<ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20">
						<li>
							<a
								href="#"
								@click.prevent="setLocale('en'), fetchArticle()"
								ref="account"
								class="flex items-center px-3 py-3 hover:bg-gray-200"
								@keydown.esc.exact="hideDropdown"
							>
								<img src="/flag_en.svg" alt="english flag" class="h-8 w-8">
								<span class="ml-2">English</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								@click.prevent="setLocale('fr'), fetchArticle()"
								class="flex items-center px-3 py-3 hover:bg-gray-200"
								@keydown.esc.exact="hideDropdown"
							>
								<img src="/flag_fr.svg" alt="french flag" class="h-8 w-8">
								<span class="ml-2">French</span>
							</a>
						</li>
					</ul>
				</div>

				<router-link :to="`/${$i18n.locale}`" class="hover:text-gray-600 uppercase">
					{{$t("landing-page.nav.home")}}
				</router-link>
			</nav>
		</header>

		<main class="w-full flex-col xl:w-1/2 m-auto mt-14 md:mt-14 space-y-8">
			<a id="github" :href="project.github" target="_blank"  class="flex justify-center space-x-2 cursor-pointer p-2">
				<div class="flex flex-row space-x-4 mt-1">
					<p class="bg-myBlue-900 text-white text-center h-auto my-auto p-2 rounded-xl font-bold"> {{$t("projects.mon-site-perso.translatable.year")}} </p>
				</div>

				<h1 class="text-2xl md:text-5xl grid place-items-center text-myBlue-900 font-bold"> · {{$t("projects.mon-site-perso.translatable.title")}} · </h1>

				<div class="flex justify-center items-center gap-1" style="font-size: 2rem;">
					<i v-for="(tech, index) in $t(`projects.${this.name}.techs`)" :key="index" :class=tech ></i>
				</div>
			</a>

			<div class="article w-11/12 md:w-2/3 xl:w-full mx-auto" v-html="article"></div>
		</main>
	</div>
</template>
<script>
	import { mixin as clickaway } from 'vue-clickaway'
	import { marked } from 'marked'
	import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

	export default {
		name: 'Project',
		mixins: [ clickaway ],
		components: {
			LanguageSwitcher,
		},
		data() {
			return {
				name: this.$route.name,
				project: this.$t(`projects.${this.$route.name}`),
				source: this.$t(`projects.${this.$route.name}.extendedContent`),
				article: "",
				menuOpen: false, 
				isVisible: false,
				focusedIndex: 0,
			}
		},
		created() {
			this.fetchArticle()
		},
		methods: {
			fetchArticle() {
				this.article = marked(atob(this.$t(`projects.${this.$route.name}.extendedContent`)))
			},
			toggleMenu() {
				this.menuOpen = !this.menuOpen
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

<style lang="postcss">
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }

	#github {
		border: transparent 1px solid;
		transition: ease-in-out;
		transition-duration: 0.3s;
	}

	#github:hover {
		border: #21243D 1px solid;
		border-radius: 50px;
	}

	.article {
		color: #21243D;
	}

	.article h1 {
		margin-top:60px;
		margin-bottom:30px;
		font-size: 2em;
		font-weight: 800;
	}

	.article h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article ul {
		padding-left: 5%;
	}

	.article img {
		width:auto;
		margin:auto;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -10px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 10px;
	}

	.article p, .article ul, .article h2 {
		margin-top: 20px;
	}

	.article ul, .article li {
		list-style-type: circle;
	}
</style>