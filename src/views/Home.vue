<template>
  <div>

	<transition name="fade" appear>
	<header
	class="
		m-auto
		md:mt-20
		flex-col
		space-y-5
		md:flex
		md:flex-row
		justify-center
		md:space-x-10
		md:w-3/4
		xl:w-1/2
	">
		<img class="w-48 h-48 mx-auto my-auto md:w-60 md:h-60 shadow-2xl rounded-full pp" src="../assets/pp.jpeg" alt="picture of the webmaster">

		<div class="flex-row w-full sm:w-2/3 mx-auto h-full space-y-8">
			<h1 class="text-3xl  md:text-5xl text-center md:text-left text-myBlue-900 font-extrabold"> <span>Constantin,</span> <br> <span>{{ $t('student') }}</span> </h1>
			<p class="text-center md:text-left w-full"> {{ $t('description') }} <fa icon="arrow-down-wide-short" size="l" /></p>

			<div class="w-full grid place-items-center">
				<a class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold" href= "./static/cv.pdf" target="_blank">{{ $t('cv') }}<fa class="ml-2" icon="file-pdf" size="l" /></a>
			</div>
		</div>

	</header>
	</transition>

	<transition name="fade" appear>
		<main class="mt-10 md:mt-24 space-y-10">

			<router-link :to="`/${$i18n.locale}/project`">
			<Card @click="setBackground" v-for="(project, index) in bank.projects" :key="index"
				:title="project.title"
				:year="project.year"
				:subtitle="project.subtitle"
				:content="project.content"
				:techs="project.techs"
				:imageURL="project.imageURL"
				:imageAlt="project.imageAlt"
				:id="project.id"
			/>
			</router-link>
		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>

	</div>

</template>

<script>
	import Card from '@/components/Card.vue'
	import Footer from '@/components/Footer.vue'

export default {
		name: 'Home',
		components: {
			Card,
			Footer
		},
		data() {
			return {
				sync: true,
				bank: [],
				langs: ['en','fr']
				// lang: navigator.language.split('-')[0],
			}
		},
		created() {
			fetch("/data.json")
			.then(response => response.json())
			.then(data => (this.bank = data))
		},
		methods: {
			test() {
				// $i18n.locale = "fr";
				document.getElementById("display").innerHTML = this.$i18n.locale.toString();
				// location.reload();
				// if (this.lang == "en") {
				// 	this.$i18n.locale = "fr";
				// } else {
				// 	this.$i18n.locale = "en";
				// }
			}
		}
	}
</script>
