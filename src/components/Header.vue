<template>
  <div>
		<header class="bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
			<nav class="container mx-auto px-8 flex flex-row bg-transparent font-bold justify-center space-x-5 items-center py-8">
				<language-switcher />
				<router-link :to="`/${$i18n.locale}`" class="hover:text-gray-600 uppercase">
					{{$t("landing-page.nav.home")}}
				</router-link>
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

