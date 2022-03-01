<template>
	<Header />

	<main class="grid place-items-center mt-24 space-y-7">
		<Card v-for="(project, index) in projects" :key="index"
			:title="project.title"
			:year="project.year"
			:subtitle="project.subtitle"
			:content="project.content"
			:techs="project.techs"
		/>
	</main>

	<Footer
		language="English (US)"
		license="Copyright @2022 All rights reserved"
	/>
</template>

<script>
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
		Card,
		Header,
		Footer
  },
	data() {
		return {
			projects: [
				{
					title: "Mon site perso",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["js","python"]
				},
				{
					title: "Citadelles",
					subtitle: "Un jeu en java",
					year: "2021",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["java","android"]
				},
				{
					title: "Clavier bépo",
					subtitle: "Une configuration clavier optimisée",
					year: "2020",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["fedora","linux"]
				},
				{
					title: "Prime Explo",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["js","windows"]
				}
			]
		}
	}
}
</script>