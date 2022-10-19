<template>
  <div class="main">
		<main class="w-full flex-col xl:w-1/2 m-auto mt-16 md:mt-14 space-y-8">
			<a id="github" :href="project.github" target="_blank"  class="flex justify-center space-x-2 cursor-pointer p-2 mt-24">

				<h1 class="text-2xl md:text-5xl grid place-items-center text-myBlue-900 font-bold"> {{ $t(`projects.citadelles.translatable.title`) }} </h1>

				<div class="flex justify-center items-center gap-1" style="font-size: 2rem;">
					<i v-for="(tech, index) in project.techs" :key="index" :class=tech ></i>
				</div>
			</a>

			<div id="article" class="article w-11/12 md:w-2/3 xl:w-full mx-auto" v-html="article"></div>
		</main>
	</div>
</template>

<script>
	import { marked } from 'marked'

	export default {
		name: 'Professionnal',
		data() {
			return {
				project: this.$t(`projects.citadelles`),
				article: this.fetchContent(),
			}
		},
		created() {
			this.fetchContent()
		},
		methods: {
			fetchContent() {
				this.article = marked(atob(this.$t(`projects.citadelles.extendedContent`)))
			}
		}
	}
</script>

<style>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }

	#github {
		border: transparent 1px solid;
		transition: ease-in-out;
		transition-duration: 0.3s;
	}

	.article {
		color: #21243D;
	}

	.article h1 {
		margin-top:60px;
		margin-bottom:30px;
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