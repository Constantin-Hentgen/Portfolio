<template>
  <div id="app" class="font-sans text-gray-800">

    <header class="border-t-4 border-blue-700 bg-white z-10 opacity-75 w-full shadow-md sticky top-0">
      <nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-8">
        <div class="mb-0 lg:mb-6 xl:mb-0">
          <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
            Home
          </router-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block': 'hidden'"
        >
          <li class="mr-12 mb-6 lg:mb-0">
            <search-component />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <mega-menu />
          </li>
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
    <div class="bg-gray-100 min-h-screen pt-40 text-lg">
      <router-view/>
    </div>
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


