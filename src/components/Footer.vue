<template>
	<footer class="mx-auto mt-24 flex justify-evenly w-1/2">
		<select class="bg-transparent" v-model="language">
			<option value="english">English (US)</option>
			<option value="francais">Français (France)</option>
		</select>
		<p> {{ license }} </p>
		<p> made with <fa icon="heart" size="l" /> with <fa :icon='["fab","vuejs"]' size="l"/> </p>
	</footer>
</template>

<script>
export default {
  name: 'Card',
  props: {
		license: String
  },
	data() {
		return {
			language:"english"
		}
	}
}
</script>
