<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth bg-myBlue-200 text-lg min-h-screen flex flex-col justify-between">
		<transition name="slideLeft" appear :key="$route.fullPath">
			<Header />
		</transition>
		
		<transition name="slideLeft" appear :key="$route.fullPath">
			<router-view />
		</transition>

		<transition name="slideLeft" appear :key="$route.fullPath">
			<Footer />
		</transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
	components: {
		Header,
		Footer
	}
}
</script>

<style src="@/fontawesome-free/css/all.min.css"/>
<style src="@/assets/css/vue2-animate.min.css" />
<style src="@/assets/css/tailwind.css" />
