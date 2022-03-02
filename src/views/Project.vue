<template>
	<header class="m-auto grid place-items-center">
		<router-link to="/" >back home</router-link>
	</header>

	<transition name="fade" appear>
	<main class="w-full xl:w-1/2 m-auto mt-32">

		<h1 class="w-full text-5xl text-myBlue-900 font-bold"> {{ projects[id].title }} </h1>


		<div class="flex flex-row border-2 border-black">
			<p class="mt-20"> {{ projects[id].year }} </p>
			<fa v-for="(tech, index) in projects[id].techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
		</div>

		<p class="flex"> {{ projects[id].content }} </p>

		<div v-html="projects[0].img"></div>
		<div> {{ projects[0].img}} </div>

	</main>


		</transition>



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

					show:true,
				projects: [
				{
					id:1,
					title: "Mon site perso",
					subtitle: "website",
					year: "2022",
					content: "Beaucoup plus de contenu c'est un site web qui n'a rien de véritablement spécial simplement il est très cool vu qu'il est fait avec vue.js et que j'ai beaucoup de talent",
					techs:["vuejs"],
					img:'<img src="../assets/pp.jpeg" />'
				},
				{
					id:2,
					title: "Hor'sensei",
					subtitle: "website",
					year: "2022",
					content: "Mon site perso qui est construit avec vue.js et tailwindcss. Regroupe tous les projets terminés que j'ai pu faire ces dernières années",
					techs:["vuejs"],
					img:[""]
				},
				{
					id:3,
					title: "Citadelles",
					subtitle: "Un jeu en java",
					year: "2021",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["java","android"],
					img:[""]
				},
				{
					id:4,
					title: "Clavier bépo",
					subtitle: "Une configuration clavier optimisée",
					year: "2020",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["windows","linux"],
					img:[""]
				},
				{
					id:5,
					title: "Prime Explo",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"],
					img:[""]
				},
				{
					id:6,
					title: "Task Manager",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["js-square","vuejs"],
					img:[""]
				},
				{
					id:7,
					title: "Text Parser",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["python"],
					img:[""]
				},
				{
					id:8,
					title: "Vue-Weather",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["vuejs"],
					img:[""]
				},
				{
					id:9,
					title: "Touyube",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt"],
					img:[""]
				},
				{
					id:10,
					title: "Le Pouvoir du vote",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["html5","css3-alt","js-square"],
					img:[""]
				},
				{
					id:10,
					title: "Php Experiment",
					subtitle: "Recherche de nombres premiers",
					year: "2019",
					content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
					techs:["sass","php"],
					img:[""]
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