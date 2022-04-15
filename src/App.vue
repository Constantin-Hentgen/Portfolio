<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth">

		<transition name="fade" appear>
			<header class="bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
	      <nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-8">

	        <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
	          {{$t("nav.home")}}
	        </router-link>

	        <ul class="uppercase bg-white tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
	          :class="menuOpen ? 'block': 'hidden'">
	          <li class="mr-8 mb-6 lg:mb-0">
	            <router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">{{$t("nav.about")}}</router-link>
	          </li>
	          <li class="mr-8 mb-6 lg:mb-0">
	            <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">{{$t("nav.contact")}}</router-link>
	          </li>
	          <li class="mb-4 lg:mb-0 lg:mr-8">
	            <language-switcher />
	          </li>
	        </ul>
	      </nav>
	    </header>
		</transition>

		<transition name="fade" appear>
  	  <div class="bg-myBlue-200 min-h-screen pt-40 text-lg">
  	    <router-view/>
  	  </div>
		</transition>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'app',
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

<style src="@/assets/css/tailwind.css" />


