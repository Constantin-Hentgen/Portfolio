<template>
	<div>
		<main class="mt-20 md:mt-24 flex flex-wrap gap-x-5 place-content-center">
			<Card v-for="(experience, index) in $t('experiences')" :key="index"
				:title="experience.translatable.title"
				:year="experience.translatable.year"
				:subtitle="experience.translatable.subtitle"
				:content="experience.translatable.content"
				:imageURL="experience.imageURL"
				:imageAlt="experience.translatable.imageAlt"
				:URL="experience.URL"
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