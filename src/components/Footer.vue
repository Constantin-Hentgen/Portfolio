<template>
	<footer class="mx-auto mt-24 flex justify-evenly w-1/2">
		<p> {{ language }} </p>
		<p> {{ license }} </p>
		<p> made with <fa icon="heart" size="l" /> with <fa :icon='["fab","vuejs"]' size="l"/> </p>
	</footer>
</template>

<script>
export default {
  name: 'Card',
  props: {
    language: String,
		license: String
  }
}
</script>
