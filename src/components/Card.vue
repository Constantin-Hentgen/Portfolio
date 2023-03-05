<template>
	<router-link :to="`/${$i18n.locale}/${this.type}/${URL}`" id="card"
		class="
			m-auto
			bg-myBlue-900
			text-myBlue-200
			shadow-2xl
			overflow-hidden
			rounded-md
			cursor-pointer
			flex
			w-80
		">
		<div class="flex flex-col w-full bg-myBlue-200">
			<div class="bg-myBlue-900">
				<i class="fa-solid fa-file-lines absolute mt-2 ml-2 text-myBlue-200" />
	
				<div class="flex w-full justify-evenly flex-col">
					<div class="flex flex-col justify-between p-1 text-white">
						<h1 class="text-xl md:text-2xl w-full text-center"> {{ title }} </h1>
						
						<h2 class="text-sm md:text-lg h-3 ml-2 mb-3 text-center italic text-gray-500 font-light">
							{{ year }} - {{ subtitle }} &nbsp;
							<i v-for="(tech, index) in techs" :key="index" :class=tech>&nbsp;</i>
						</h2>
					</div>
				</div>
			</div>

			<p class="text-sm md:text-base p-2 bg-myBlue-200 text-myBlue-900 min-w-full"> {{ content }} </p>
		</div>
	</router-link>
</template>

<script>
export default {
  name: 'Portrait',
  props: {
	  id: Number,
	  techs: Array,
	  title: String,
	  content: String,
	  year: String,
	  subtitle: String,
	  URL: String
	},
	data() {
		return {
			type: ""
		}
	},
	created() {
		this.getType()
	},
	methods: {
		getType() {
			if (this.$route.path.includes('project')) {
				this.type = "project"
			} else if (this.$route.path.includes('experience')) {
				this.type = "experience"
			}
		}
	}
}
</script>

<style lang="css" scoped>
	#card {
		transition: ease-in-out;
		transition-duration: 0.15s;
	}

	#card:hover {
		transform: scale(1.05);
	}
</style>
