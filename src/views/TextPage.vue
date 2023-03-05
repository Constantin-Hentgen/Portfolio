<template>
	<Markdown
		:url="$route.name"
	/>
</template>

<script>
	import Markdown from '@/components/Markdown.vue'

	export default {
		name: 'TextPage',
		components: {
			Markdown
		}
	}
</script>