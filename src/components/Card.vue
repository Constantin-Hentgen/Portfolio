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
			<div class="bg-myBlue-900 flex flex-col w-full justify-between p-1 text-white">
				<h1 class="text-base w-full text-center"> {{ title }} </h1>
				
				<h2 class="text-xs text-center italic text-gray-500 font-light">
					{{ year }} - {{ subtitle }} &nbsp;
					<i v-for="(tech, index) in techs" :key="index" :class=tech>&nbsp;</i>
				</h2>
			</div>

			<p class="text-sm p-2 bg-myBlue-200 text-myBlue-900 min-w-full"> {{ content }} </p>

			<div class="grid place-items-end mb-2 mr-2">
				<i class="fa-solid fa-arrow-up-right-from-square text-base text-myBlue-900" />
			</div>
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
		transform: scale(1.03);
		outline-color: #001d3d;
		outline-style: dashed;
		outline-offset: 3px;
	}
</style>
