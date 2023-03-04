<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth bg-myBlue-200 text-lg min-h-screen flex flex-col justify-between">
		<Header />
		
		<transition name="fade" appear>
			<router-view id="content"/>
		</transition>

		<transition name="fade" appear>
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
	},
}
</script>

<style src="@/fontawesome-free/css/all.min.css"/>
<style src="@/assets/css/vue2-animate.css" />
<style src="@/assets/css/tailwind.css" />
