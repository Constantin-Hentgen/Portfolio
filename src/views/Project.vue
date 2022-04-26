<template>
  <div>
		<main class="w-full flex-col xl:w-1/2 m-auto mt-14 md:mt-14 space-y-8">
			<a id="github" :href="project.github"  class="flex justify-center space-x-2 cursor-pointer p-2">
				<div class="flex flex-row space-x-4 mt-1">
					<p class="bg-myBlue-900 text-white text-center h-auto my-auto p-2 rounded-xl font-bold"> {{$t("projects.mon-site-perso.translatable.year")}} </p>
				</div>

				<h1 class="text-2xl md:text-5xl grid place-items-center text-myBlue-900 font-bold"> · {{$t("projects.mon-site-perso.translatable.title")}} · </h1>

				<div class="flex justify-center items-center gap-1" style="font-size: 2rem;">
					<i v-for="(tech, index) in $t(`projects.${this.name}.techs`)" :key="index" :class=tech ></i>
				</div>
			</a>

			<div class="article w-full" v-html="article"></div>
		</main>
	</div>
</template>

<script>
	import { marked } from 'marked'

	export default {
		name: 'Project',
		data() {
			return {
				name: this.$route.name,
				project: this.$t(`projects.${this.$route.name}`),
				source: this.$t(`projects.${this.$route.name}.extendedContent`),
				article: "",
			}
		},
		created() {
			this.fetchArticle()
		},
		methods: {
			fetchArticle() {
				this.article = marked(atob(this.source))
			}
		}
	}
</script>

<style lang="postcss">
	.article {
		color: #21243D;
	}

	.article h1 {
		font-size: 2em;
		font-weight: 800;
	}

	.article h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article ul {
		padding-left: 5%;
	}

	.article img {
		width:auto;
		margin:auto;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -10px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 10px;
	}

	.article p, .article ul, .article h2 {
		margin-top: 20px;
	}

	.article ul, .article li {
		list-style-type: circle;
	}
</style>