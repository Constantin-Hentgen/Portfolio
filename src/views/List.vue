<template>
	<main class="flex flex-wrap mt-32 md:px-20 gap-y-5 place-content-center mx-auto sm:w-3/4">
		<Card v-for="(item, index) in $t(this.type)" :key="index"
			:title="item.translatable.title" 
			:year="item.translatable.year"
			:subtitle="item.translatable.subtitle"
			:content="item.translatable.content"
			:techs="item.techs"
			:URL="item.URL"
		/>
	</main>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	name: 'List',
	components: {
		Card
	},
	data() {
		return {
			type: ""
		}
	},
	created() {
		this.getType()
		window.addEventListener('click', this.getType);
		window.addEventListener('load', this.getType);
	},
	watch: {
		'$route'() {
			this.getType();
		}
	},
	unmounted () {
		window.removeEventListener('click', this.getType);
		window.removeEventListener('load', this.getType);
	},
	methods: {
		getType() {
			if (this.$route.path.includes('project')) {
				this.type = "projects"
			} else if (this.$route.path.includes('experience')) {
				this.type = "experiences"
			}
		}
	}
}
</script>