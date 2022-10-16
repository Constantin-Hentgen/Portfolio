<template>
  <div>
		<header class="bg-myBlue-200 z-10 opacity-75 w-full shadow-md sticky top-0">
			<nav class="container w-full lg:w-1/2 mx-auto px-8 flex flex-row justify-between bg-transparent font-bold space-x-5 items-center py-8">
				<div class="w-1/2 flex justify-between">
					<router-link :to="`/${$i18n.locale}`" id="home" class="hover:text-gray-600 uppercase">
						<i class="fas fa-home"></i>
						{{$t("landing-page.nav.home")}}
					</router-link>
					<router-link :to="`/${$i18n.locale}/projects`" id="projects" class="hover:text-gray-600 uppercase">
						<i class="fas fa-diagram-project"></i>
						{{$t("landing-page.nav.projects")}}
					</router-link>
					<router-link :to="`/${$i18n.locale}/experience`" id="experience" class="hover:text-gray-600 uppercase">
						<i class="fas fa-briefcase"></i>
						{{$t("landing-page.nav.experience")}}
					</router-link>
				</div>
				<language-switcher />
			</nav>
		</header>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
	name: 'Header',
	components: {
		LanguageSwitcher,
	},
	data() {
		return {
			menuOpen: false,
			navBank: ['home', 'projects', 'experience'],
			navIndex : 0 // si = 0 alors bind la classe highlight (définition à faire sur l’élément directement)
		}
	},
	methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
	},
	computed: {
		highlight() {
			// identifier le path actif
			let pageUrl = this.$route.name;

			// identifier chacuns des éléments du menu [par les id HTML]

			switch (pageUrl) {
				case 'home':
					this.navIndex = 0;
					break;
				case 'projects':
					this.navIndex = 1;
					break;
				case 'experience':
					this.navIndex = 2;
					break;
				default:
					console.log('Page unknown');
			}

			console.log(this.navIndex);
			// affecter la classe css highlight à l’élément correspondant
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
    transform: translateY(-12px);
  }

	.highlight {
		color: white;
		background: black;
	}
</style>

