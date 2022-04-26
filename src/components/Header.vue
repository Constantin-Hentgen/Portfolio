<template>
  <div>
		<header class="bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
			<nav class="container mx-auto px-8 flex flex-wrap font-bold justify-between items-center py-8">
				<router-link :to="`/${$i18n.locale}`" class=" text-xl flex hover:text-gray-60">
					{{$t("landing-page.nav.home")}}
				</router-link>

				<ul class="uppercase w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0">
					<li class="mr-8 mb-6 lg:mb-0">
						<router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">{{$t("landing-page.nav.contact")}}</router-link>
					</li>

					<li class="mr-8 mb-6 lg:mb-0">
						<router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">{{$t("landing-page.nav.about")}}</router-link>
					</li>

					<li class="mb-4 lg:mb-0 lg:mr-8">
						<language-switcher />
					</li>
				</ul>
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
		}
	},
	methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
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
</style>

