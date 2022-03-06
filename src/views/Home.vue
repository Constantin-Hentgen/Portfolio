<template>
	<transition name="fade" appear>
		<Header />
	</transition>

	<transition name="fade" appear>
		<main class="grid place-items-center mt-10 md:mt-24 space-y-10">
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
					subtitle: "Website",
					year: "2022",
					content: "Mon site perso qui est construit avec VueJS et TailwindCSS. Regroupe tous les projets terminés que j'ai pu réaliser ces dernières années",
					techs:["vuejs"],
					imageURL:"img/coding.jpeg"
				},
				{
					id:2,
					title: "Hor'sensei",
					subtitle: "Website",
					year: "2022",
					content: "Blog réalisé en VueJS dans un contexte d'ERASMUS au Danemark.",
					techs:["vuejs"],
					imageURL:"img/dk.jpeg"
				},
				{
					id:3,
					title: "Prime Explo",
					subtitle: "Recherche de nombres premiers",
					year: "2022",
					content: "Programme calculateur de nombres premiers qui trace des graphiques afin de modéliser des allures et faire des approximations.",
					techs:["python"],
					imageURL:"img/graph.jpeg"
				},
				{
					id:4,
					title: "Citadelles",
					subtitle: "POO en équipe",
					year: "2021",
					content: "Projet SCRUM par 4 étudiants d'un jeu de rôle de plateau.",
					techs:["java"],
					imageURL:"img/retro.jpeg"
				},
				{
					id:5,
					title: "Vue-Weather",
					subtitle: "Application météo",
					year: "2021",
					content: "Introduction au framework VueJS avec appel API OpenWeather.",
					techs:["vuejs"],
					imageURL:"img/app.jpeg"
				},
				{
					id:6,
					title: "Task Manager",
					subtitle: "Website",
					year: "2021",
					content: "Site de découverte de VueJS avec usage de JavaScript natif.",
					techs:["js-square","vuejs"],
					imageURL:"img/todo.jpeg"
				},
				{
					id:7,
					title: "Touyube",
					subtitle: "Website",
					year: "2021",
					content: "Projet de développement web niveau débutant en HTML & CSS natifs.",
					techs:["html5","css3-alt"],
					imageURL:"img/youtube.jpeg"
				},
				{
					id:8,
					title: "Text Parser",
					subtitle: "Parsing de textes.",
					year: "2021",
					content: "Programme générateur de statistiques sur un texte donné permettant des études comparatives.",
					techs:["python"],
					imageURL:"img/stats.jpeg"
				},
				{
					id:9,
					title: "Php Experiment",
					subtitle: "Website",
					year: "2021",
					content: "Site d'entrainement au calcul mental, introduction au language PHP et SCSS.",
					techs:["sass","php"],
					imageURL:"img/calculator.jpeg"
				},
				{
					id:10,
					title: "Clavier bépo",
					subtitle: "Clavier optimisée",
					year: "2020",
					content: "Personnalisation de configuration clavier optimisée sous Linux & Windows.",
					techs:["windows","linux"],
					imageURL:"img/keyboard.jpeg"
				},
				{
					id:11,
					title: "Le Pouvoir du vote",
					subtitle: "Website",
					year: "2021",
					content: "Projet scolaire, site web statique de sensibilisation au droit de vote en France.",
					techs:["html5","css3-alt"],
					imageURL:"img/france.jpeg"
				}
			]
		}
	}
}
</script>