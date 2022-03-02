<template>

	<button @click="titleParser">CLIQUE MOI POUR PARSER</button>

		<Card v-for="(project, index) in projects" :key="index"
			:title="project.title"
			:year="project.year"
			:subtitle="project.subtitle"
			:content="project.content"
			:techs="project.techs"
			:id="project.id"
		/>

		<p> {{ projects[id].title }} </p>

	<Footer />

</template>

<script>
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'Project',
		components: {
			Footer,
		},
		data() {
			return {
				id: this.$route.params.id - 1,
				projects:[
				{
					id:1,
					title: "Mon site perso",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["vuejs"],
				},
				{
					id:2,
					title: "Hor'sensei",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["vuejs"],
				},
				{
					id:3,
					title: "Citadelles",
					subtitle: "Un jeu en java",
					year: "2021",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["java","android"]
				},
				{
					id:4,
					title: "Clavier bépo",
					subtitle: "Une configuration clavier optimisée",
					year: "2020",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["windows","linux"]
				},
				{
					id:5,
					title: "Prime Explo",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"]
				},
				{
					id:6,
					title: "Task Manager",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["js-square","vuejs"]
				},
				{
					id:7,
					title: "Text Parser",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"]
				},
				{
					id:8,
					title: "Vue-Weather",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["vuejs"]
				},
				{
					id:9,
					title: "Touyube",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt"]
				},
				{
					id:10,
					title: "Le Pouvoir du vote",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt","js-square"]
				},
				{
					id:10,
					title: "Php Experiment",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["sass","php"]
				}
				],
			}
		},
		methods: {
			titleParser(title) {
				if (title.indexOf(" ") > -1) {
					alert("y a un putain d'espace dans ton titre")
				}
			}
		},
	}

</script>

