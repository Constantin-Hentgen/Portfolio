<template>
	<div>
		<main class="mt-20 md:mt-24 flex flex-wrap gap-x-5 place-content-center">
			<Card v-for="(project, index) in $t('experiences')" :key="index"
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
	</div>
</template>

<script>
import Card from '@/components/Portrait.vue'

export default {
	name: 'Experience',
	components: {
		Card
	}
}
</script>