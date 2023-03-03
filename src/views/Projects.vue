<template>
	<div>
		<transition name="fade" appear>
			<main class="mt-32 md:mt-24 space-y-5 w-11/12 mx-auto">
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
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	name: 'Home',
	components: {
		Card
	}
}
</script>