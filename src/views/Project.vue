<template>
	<transition name="fade" appear>
		<header class="m-auto grid place-items-center text-lg">
			<router-link to="/" >back home</router-link>
		</header>
	</transition>

	<transition name="fade" appear>
		<main class="w-full xl:w-1/2 m-auto mt-14 md:mt-32 space-y-8">
			<div>
				<a id="github" :href="projects[id].github"  class="flex space-x-2 cursor-pointer p-2">
					<h1 class="text-3xl md:text-5xl text-myBlue-900 font-bold"> {{ projects[id].title }} · </h1>
					<fa class="my-auto" :icon='["fab","github-alt"]' size="2xl" color="21243D" />
				</a>

				<div class="flex flex-row space-x-4">
					<p class="bg-myBlue-900 text-white text-center h-auto my-auto p-2 rounded-xl font-bold"> {{ projects[id].year }} </p>
					<div class="h-full m-0 my-auto space-x-2">
						<fa v-for="(tech, index) in projects[id].techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
					</div>
				</div>
			</div>


			<p class="text-lg"> {{ projects[id].content }} </p>
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
				id: this.$route.params.id-1,
				projects: [
					{
						id:1,
						title: "Mon site perso",
						subtitle: "website",
						year: "2022",
						content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
						techs:["vuejs"],
						imageURL:"img/coding.jpeg",
						github:"https://github.com/Constantin-Hentgen/constantin-hentgen.fr",
					},
					{
						id:2,
						title: "Hor'sensei",
						subtitle: "website",
						year: "2022",
						content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
						techs:["vuejs"],
						imageURL:"img/dk.jpeg",
						github:"https://github.com/Rhylionn/denmark-blog",
					},
					{
						id:3,
						title: "Prime Explo",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["python"],
						imageURL:"img/graph.jpeg",
						github:"https://github.com/Constantin-Hentgen/prime-explo",
					},
					{
						id:4,
						title: "Citadelles",
						subtitle: "Un jeu en java",
						year: "2021",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["java"],
						imageURL:"img/retro.jpeg",
						github:"https://github.com/Constantin-Hentgen/Citadelles",
					},
					{
						id:5,
						title: "Vue-Weather",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["vuejs"],
						imageURL:"img/app.jpeg",
						github:"https://github.com/Constantin-Hentgen/vue-weather",
					},
					{
						id:6,
						title: "Task Manager",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["js-square","vuejs"],
						imageURL:"img/todo.jpeg",
						github:"https://github.com/Constantin-Hentgen/task-manager",
					},
					{
						id:7,
						title: "Text Parser",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["python"],
						imageURL:"img/stats.jpeg",
						github:"https://github.com/Constantin-Hentgen/text-parser",
					},
					{
						id:8,
						title: "Php Experiment",
						subtitle: "Recherche de nombres premiers",
						year: "2020",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["sass","php"],
						imageURL:"img/calculator.jpeg",
						github:"https://github.com/Constantin-Hentgen/php-experiment",
					},
					{
						id:9,
						title: "Touyube",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["html5","css3-alt"],
						imageURL:"img/youtube.jpeg",
						github:"https://github.com/Constantin-Hentgen/Touyube",
					},
					{
						id:10,
						title: "Clavier bépo",
						subtitle: "Une configuration clavier optimisée",
						year: "2020",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["windows","linux"],
						imageURL:"img/keyboard.jpeg",
						github:"https://github.com/Constantin-Hentgen/xkb-fr-bepo",
					},
					{
						id:11,
						title: "Le Pouvoir du vote",
						subtitle: "Recherche de nombres premiers",
						year: "2019",
						content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
						techs:["html5","css3-alt","js-square"],
						imageURL:"img/france.jpeg",
						github:"https://github.com/Constantin-Hentgen/le-pouvoir-du-vote",
					}
				]
			}
		}
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

	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}


</style>