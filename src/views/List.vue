<template>
	<main class="w-11/12 md:w-1/2 flex flex-wrap mt-32 md:px-20 gap-y-5 place-content-center mx-auto">
		<Card v-for="(item, index) in $t(this.type)" :key="index"
			:title="item.title" 
			:year="item.year"
			:subtitle="item.subtitle"
			:content="item.description"
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