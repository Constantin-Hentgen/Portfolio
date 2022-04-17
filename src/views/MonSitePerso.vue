<template>
<div>
	<transition name="fade" appear>
		<main class="w-full flex-col xl:w-1/2 m-auto mt-14 md:mt-14 space-y-8">
			<a id="github" :href="project.github"  class="flex justify-center space-x-2 cursor-pointer p-2">
				<div class="flex flex-row space-x-4 mt-1">
					<p class="bg-myBlue-900 text-white text-center h-auto my-auto p-2 rounded-xl font-bold"> {{$t("projects.mon-site-perso.translatable.year")}} </p>
				</div>

				<h1 class="text-2xl md:text-5xl grid place-items-center text-myBlue-900 font-bold"> · {{$t("projects.mon-site-perso.translatable.title")}} · </h1>
				
				<div class="flex justify-center items-center gap-1">
					<i v-for="(tech, index) in project.techs" :key="index" :class=tech ></i>
				</div>
			</a>

			<p>{{$t(`projects.${this.name}.extendedContent`)}}</p>

			<div class="article w-full" v-html="article"></div>
			<!-- <div class="article w-full" v-html="marked(atob($t(projects.name.extendedContent)))"></div> -->
		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>
</div>
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
				id: 1,
				name: this.$route.name,
				project: "",
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

	.article :deep() h1 {
		font-size: 2em;
		font-weight: 800;
	}

	.article :deep() h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article :deep() hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article :deep() ul {
		padding-left: 5%;
	}

	.article :deep() img {
		width:auto;
		margin:auto;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -10px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 10px;
	}

	.article :deep() p, .article :deep() ul, .article :deep() h2 {
		margin-top: 20px;
	}

	.article :deep() ul,li {
		list-style-type: circle;
	}

</style>