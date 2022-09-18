<template>
	<div>	
		<div v-if="display" class="toFade">	
			<transition name="fade" appear>
				<main class="mt-10 md:mt-24 space-y-10">
					<Card v-for="(project, index) in $t('projects')" :key="index"
						:title="project.translatable.title" 
						:year="project.translatable.year"
						:subtitle="project.translatable.subtitle"
						:content="project.translatable.content"
						:techs="project.techs"
						:imageURL="project.imageURL"
						:imageAlt="project.translatable.imageAlt"
						:URL="project.URL"
					/>
				</main>
			</transition>
		</div>
	
		<Spinner v-else/>
	</div>
</template>

<script>
import Card from '@/components/HorizontalCard.vue'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: {
		Card,
		Spinner
	},
	data() {
		return {
			display: false
		}
	},
	created() {
		setTimeout(() => {
			this.display = true;
		}, 1500);
	},
}
</script>

<style scoped>
.toFade {
	animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>