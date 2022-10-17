<template>
	<div>
		<main class="mt-10 md:mt-24 flex flex-wrap justify-evenly">
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
	name: 'Home',
	components: {
		Card
	}
}
</script>