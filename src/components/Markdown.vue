<template>
	<main
		class="w-10/12 md:w-1/2 flex-col mt-20 md:mt-32 space-y-8 mx-auto article" 
		v-html="article">
	</main>
</template>

<script>
	import { marked } from 'marked'

	export default {
		name: 'Markdown',
		props: {
				url: String
		},
		data() {
			return {
				project: "",
				article: ""
			}
		},
		created() {
			this.fetchContent()
			window.addEventListener('click', this.fetchContent);
			window.addEventListener('load', this.getProgression);
		},
		watch: {
			'$route'() {
				this.fetchContent();
			}
		},
		unmounted () {
			window.removeEventListener('click', this.getProgression);
			window.removeEventListener('load', this.getProgression);
		},
		methods: {
			fetchContent() {
				if (this.$route.path.includes('project')) {
					this.article = marked(decodeURIComponent(escape(atob(this.$t(`projects.${this.url}.text`)))))
				}  else if (this.$route.path.includes('experience')) {
					this.article = marked(decodeURIComponent(escape(atob(this.$t(`experiences.${this.url}.text`)))))
				} else {
					this.article = marked(decodeURIComponent(escape(atob(this.$t(`${this.url}.text`)))))
				}
			}
		}
	}
</script>

<style>
.article {
	color: #21243D;
}

.article h1 {
	margin-top:60px;
	margin-bottom:30px;
	font-size: 1.8em;
	font-weight: 800;
}

.article h2 {
	font-size: 1.5em;
	font-weight: 700;
}

.article h3 {
	font-size: 1.2em;
	font-weight: 700;
}

.article hr {
	background-color: #21243D;
	width: 100%;
	height: 2px;
	margin-top: 10px;
	margin-bottom: 10px;
}

.article em {
	font-style: italic;
	font-weight: 500;
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