<template>
	<main class="flex flex-wrap space-y-5 mt-32 w-full sm:w-3/4 mx-auto">
		<Card v-for="(project, index) in $t('projects')" :key="index"
			:title="project.translatable.title" 
			:year="project.translatable.year"
			:subtitle="project.translatable.subtitle"
			:content="project.translatable.content"
			:techs="project.techs"
			:URL="project.URL"
		/>
	</main>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	name: 'List',
	components: {
		Card
	}
}
</script>