<template>
	<div
	class="
		w-11/12
		sm:w-1/2
		mx-auto
		my-auto
		flex-col
		justify-center
		space-y-5
		md:space-x-10
	">
		<img class="w-40 md:w-48 mx-auto mt-20 shadow-2xl rounded-full" src="../assets/pp.jpeg" alt="picture of the webmaster">

		<h1 class="text-2xl md:text-4xl text-center text-myBlue-900 font-extrabold">Constantin, {{ $t('landing-page.student') }} <i class="fas fa-shield-halved text-2xl md:text-3xl"></i></h1>
		<p class="text-center w-full text-md md:text-xl" v-html="description"></p>
	</div>
</template>

<script>
import { marked } from 'marked'
export default {
	name: 'Home',
	data() {
		return {
			description: ""
		}
	},
	created() {
		this.fetchContent();
		window.addEventListener('click', this.fetchContent);
	},
	watch: {
		'$route'() {
			this.fetchContent();
		}
	},
	unmounted () {
		window.removeEventListener('click', this.fetchContent);
	},
	methods: {
		fetchContent() {
			this.description = marked(decodeURIComponent(escape(atob(this.$t(`landing-page.description`)))))
		}
	}
}
</script>