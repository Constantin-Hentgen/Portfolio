<template>
	<transition name="fade" appear>
		<header class="m-auto grid place-items-center text-lg">
			<router-link to="/" ><fa class="mr-2" icon="house-chimney" size="lg"/>Accueil</router-link>
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

			<p class="text-lg"></p>

			<p v-html="toHTML"></p>
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
				id: parseInt(this.$route.params.id),
				project: {}
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
					})
				} else {
					alert('else')
				}
			})
			.catch(() => {
				///Error handler
			})
		},
		computed: {
			toHTML(){
				// return marked(atob(this.project.extendedContent))
				return atob(this.project.extendedContent)
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
    transition: opacity 1s ease;
  }

	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}
</style>