<template>
	<footer class="m-auto mt-24 flex justify-evenly w-1/2">
		<select class="bg-transparent" v-model="language">
			<option value="english">English (US)</option>
			<option value="francais">Français (France)</option>
		</select>

		<div class="my-auto">
			<div class="flex justify-center space-x-5 mb-5">
				<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank"><fa :icon='["fab","linkedin"]' size="2xl"/></a>
				<a href="https://github.com/Constantin-Hentgen" target="_blank"><fa :icon='["fab","github"]' size="2xl"/></a>
				<a href="https://discord.com/users/357214102361341967" target="_blank"><fa :icon='["fab","discord"]' size="2xl"/></a>
			</div>
			<p> {{ license }} </p>
		</div>

		<p class="my-auto"> made with <fa icon="heart" size="l" /> with <fa :icon='["fab","vuejs"]' size="l"/> </p>
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
