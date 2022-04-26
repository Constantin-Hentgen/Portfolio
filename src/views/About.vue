<template>
  <div>
    <div class="container mx-auto px-8 lg:px-48">
      <h2 class="text-3xl font-bold">{{ $t('landing-page.about.title') }}</h2>

      <p class="mt-4" v-html="$t('landing-page.about.content')" />
    </div>
  </div>
</template>

<script>
	export default {
		name: 'About',
	}
</script>