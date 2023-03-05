<template>
	<main class="flex flex-wrap mt-32 md:px-20 gap-y-5 place-content-center mx-auto sm:w-3/4">
		<Card v-for="(experience, index) in $t('experiences')" :key="index"
			:title="experience.translatable.title"
			:year="experience.translatable.year"
			:subtitle="experience.translatable.subtitle"
			:content="experience.translatable.content"
			:URL="experience.URL"
		/>
	</main>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	name: 'Experience',
	components: {
		Card
	}
}
</script>