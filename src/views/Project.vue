<template>
	<transition name="fade" appear>
		<header class="m-auto grid place-items-center">
			<router-link to="/" >back home</router-link>
		</header>
	</transition>

	<transition name="fade" appear>
		<main class="w-full xl:w-1/2 m-auto mt-32">

			<h1 class="w-full text-5xl text-myBlue-900 font-bold"> {{ projects[id].title }} </h1>

			<div class="flex flex-row border-2 border-black">
				<p class="mt-20"> {{ projects[id].year }} </p>
				<fa v-for="(tech, index) in projects[id].techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
			</div>

			<p class="flex"> {{ projects[id].content }} </p>

		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>

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
				projects: [
					{
						id:1,
						title: "Mon site perso",
						subtitle: "website",
						year: "2022",
						content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
						techs:["vuejs"],
						imageURL:"https://bit.ly/3Ccb6d9"
					},
					{
						id:2,
						title: "Hor'sensei",
						subtitle: "website",
						year: "2022",
						content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
						techs:["vuejs"],
						imageURL:"https://bit.ly/3Kf0lcA"
					},
					{
						id:3,
						title: "Prime Explo",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["python"],
						imageURL:"https://bit.ly/35KZW2S"
					},
					{
						id:4,
						title: "Citadelles",
						subtitle: "Un jeu en java",
						year: "2021",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["java"],
						imageURL:"https://bit.ly/3Ca2IdQ"
					},
					{
						id:5,
						title: "Vue-Weather",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["vuejs"],
						imageURL:"https://bit.ly/36NbGSL"
					},
					{
						id:6,
						title: "Task Manager",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["js-square","vuejs"],
						imageURL:"https://bit.ly/3pyqefA"
					},
					{
						id:7,
						title: "Text Parser",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["python"],
						imageURL:"https://bit.ly/3MjXqRT"
					},
					{
						id:8,
						title: "Php Experiment",
						subtitle: "Recherche de nombres premiers",
						year: "2020",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["sass","php"],
						imageURL:"https://bit.ly/3tkbeTy"
					},
					{
						id:9,
						title: "Touyube",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["html5","css3-alt"],
						imageURL:"https://bit.ly/34azlf7"
					},
					{
						id:10,
						title: "Clavier bépo",
						subtitle: "Une configuration clavier optimisée",
						year: "2020",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["windows","linux"],
						imageURL:"https://bit.ly/3MnFqG7"
					},
					{
						id:11,
						title: "Le Pouvoir du vote",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["html5","css3-alt","js-square"],
						imageURL:"https://bit.ly/3sG3sod"
					}
				]
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

<style>

 .transition-enter-active{
    animation: fade-in-down 1.5s ease-out;
  }
  @keyframes fade-in-down {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1.5s ease;
  }

</style>