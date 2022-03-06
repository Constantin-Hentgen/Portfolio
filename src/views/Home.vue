<template>
	<transition name="fade" appear>
		<Header />
	</transition>

	<transition name="fade" appear>
		<main class="grid place-items-center mt-24 space-y-10">
			<Card @click="setBackground" v-for="(project, index) in projects" :key="index"
				:title="project.title"
				:year="project.year"
				:subtitle="project.subtitle"
				:content="project.content"
				:techs="project.techs"
				:imageURL="project.imageURL"
				:id="project.id"
			/>
		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>
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
					id:1,
					title: "Mon site perso",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["vuejs"],
					imageURL:"img/coding.jpeg"
				},
				{
					id:2,
					title: "Hor'sensei",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["vuejs"],
					imageURL:"img/dk.jpeg"
				},
				{
					id:3,
					title: "Prime Explo",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"],
					imageURL:"img/graph.jpeg"
				},
				{
					id:4,
					title: "Citadelles",
					subtitle: "Un jeu en java",
					year: "2021",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["java"],
					imageURL:"img/retro.jpeg"
				},
				{
					id:5,
					title: "Vue-Weather",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["vuejs"],
					imageURL:"img/app.jpeg"
				},
				{
					id:6,
					title: "Task Manager",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["js-square","vuejs"],
					imageURL:"img/todo.jpeg"
				},
				{
					id:7,
					title: "Text Parser",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"],
					imageURL:"img/stats.jpeg"
				},
				{
					id:8,
					title: "Php Experiment",
					subtitle: "Recherche de nombres premiers",
					year: "2020",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["sass","php"],
					imageURL:"img/calculator.jpeg"
				},
				{
					id:9,
					title: "Touyube",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt"],
					imageURL:"img/youtube.jpeg"
				},
				{
					id:10,
					title: "Clavier bépo",
					subtitle: "Une configuration clavier optimisée",
					year: "2020",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["windows","linux"],
					imageURL:"img/keyboard.jpeg"
				},
				{
					id:11,
					title: "Le Pouvoir du vote",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt","js-square"],
					imageURL:"img/france.jpeg"
				}
			]
		}
	}
}
</script>