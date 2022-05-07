<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth bg-myBlue-200 min-h-screen text-lg">
			<Header />
			<router-view class="mt-20 w-full"/>
			<Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'app',
	components: {
		Header,
		Footer
	},
}
</script>

<style src="@/fontawesome-free/css/all.min.css"></style>

<style src="@/assets/css/tailwind.css">
	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}

	.dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>


