<template>
	<transition name="fade" appear>
		<header class="m-auto grid place-items-center text-lg">
			<nav>
				<router-link to="/" ><fa class="mr-2" icon="house-chimney" size="lg"/>Accueil</router-link>
			</nav>
		</header>
	</transition>

	<transition name="fade" appear>
		<main class="w-full xl:w-1/2 m-auto mt-14 md:mt-32 space-y-8">
			<div>
				<a id="github" :href="project.github"  class="flex space-x-2 cursor-pointer p-2">
					<h1 class="text-2xl md:text-5xl text-myBlue-900 font-bold"> {{ project.title }} · </h1>
					<fa class="my-auto" :icon='["fab","github-alt"]' size="2xl" color="21243D" />
				</a>

				<div class="flex flex-row space-x-4 mt-1">
					<p class="bg-myBlue-900 text-white text-center h-auto my-auto p-2 rounded-xl font-bold"> {{ project.year }} </p>
					<div class="h-full m-0 my-auto space-x-2">
						<fa v-for="(tech, index) in project.techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
					</div>
				</div>
			</div>

			<div class="article" v-html="article"></div>
		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>
</template>

<script>
	import Footer from '@/components/Footer.vue'
	import { marked } from 'marked';

	export default {
		name: 'Project',
		components: {
			Footer
		},
		data() {
			return {
				id: parseInt(this.$route.params.id),
				project: {},
				article: ""
			}
		},
		created(){
			fetch("/data.json")
			.then((res) => {
				if (res.status === 200){
					res.json().then((data) => {
						let proj = data.projects
	
						let project = this.project = proj.filter((project) => {
								return project.id === this.id
						})	
						this.project = project[0]
						this.article = marked(atob(this.project.extendedContent))
					})
				} else {
					alert('else')
				}
			})
			.catch(() => {
				///Error handler
			})
		}
	}
</script>

<style scoped>

	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}

	.article {
		color: #21243D;
	}

	.article >>> h1 {
		font-size: 2em;
		font-weight: 800;
	}

	.article >>> h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article >>> hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article >>> ul {
		padding-left: 5%;
	}

	.article >>> img {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 15px;
	}

	.article >>> p, .article >>> ul, .article >>> h2 {
		margin-top: 20px;
	}

</style>