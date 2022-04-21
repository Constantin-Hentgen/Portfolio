<template>
  <div>
		<transition name="fade" appear>
			<header class="bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
				<nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-8">

					<router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
						{{$t("landing-page.nav.home")}}
					</router-link>

					<ul class="uppercase bg-white tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0" :class="menuOpen ? 'block': 'hidden'">
						<li class="mr-8 mb-6 lg:mb-0">
							<router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">{{$t("landing-page.nav.about")}}</router-link>
						</li>

						<li class="mr-8 mb-6 lg:mb-0">
							<router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">{{$t("landing-page.nav.contact")}}</router-link>
						</li>

						<li class="relative mb-4 lg:mb-0 lg:mr-8">
							<button
								href="#"
								class="flex items-center focus:outline-none"
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
										@click.prevent="setLocale('en')"
										ref="account"
										class="flex items-center px-3 py-3 hover:bg-gray-200"
										@keydown.up.exact.prevent=""
										@keydown.tab.exact="focusNext(false)"
										@keydown.down.exact.prevent="focusNext(true)"
										@keydown.esc.exact="hideDropdown"
									>
										<img src="/flag_en.svg" alt="english flag" class="h-8 w-8">
										<span class="ml-2">English</span>
									</a>
								</li>

								<li>
									<a
										href="#"
										@click.prevent="setLocale('fr')"
										class="flex items-center px-3 py-3 hover:bg-gray-200"
										@keydown.shift.tab="focusPrevious(false)"
										@keydown.up.exact.prevent="focusPrevious(true)"
										@keydown.down.exact.prevent=""
										@keydown.tab.exact="hideDropdown"
										@keydown.esc.exact="hideDropdown"
									>
										<img src="/flag_fr.svg" alt="french flag" class="h-8 w-8">
										<span class="ml-2">French</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		</transition>

    <div class="container mx-auto px-8 lg:px-48">
      <h2 class="text-3xl font-bold">{{ $t('landing-page.about.title') }}</h2>

      <p class="mt-4" v-html="$t('landing-page.about.content')" />
    </div>
  </div>
</template>


<script>
	import Footer from '@/components/Footer.vue'
	import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
	import { marked } from 'marked'
	import { mixin as clickaway } from 'vue-clickaway'

	export default {
  	mixins: [ clickaway ],
		name: 'Project',
		components: {
			Footer,
    	LanguageSwitcher
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
				this.article = marked(atob(this.source))
			},
    	toggleMenu() {
    	  this.menuOpen = !this.menuOpen
    	},toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
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
			this.article = marked(atob(this.$t(`projects.${this.$route.name}.extendedContent`)))
    }
		}
	}
</script>

<style scoped>
	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}

	.article {
		color: #21243D;
	}

	.article :deep() h1 {
		font-size: 2em;
		font-weight: 800;
	}

	.article :deep() h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article :deep() hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article :deep() ul {
		padding-left: 5%;
	}

	.article :deep() img {
		width:auto;
		margin:auto;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -10px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 10px;
	}

	.article :deep() p, .article :deep() ul, .article :deep() h2 {
		margin-top: 20px;
	}

	.article :deep() ul,li {
		list-style-type: circle;
	}

	  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>