<template>
	<footer class="m-auto mt-12 md:mt-24 flex-col justify-evenly w-1/2">
		<div class="flex justify-center space-x-5 mb-5">
			<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank"><fa :icon='["fab","linkedin"]' size="2xl"/></a>
			<a href="https://github.com/Constantin-Hentgen" target="_blank"><fa :icon='["fab","github"]' size="2xl"/></a>
			<a href="https://discord.com/users/357214102361341967" target="_blank"><fa :icon='["fab","discord"]' size="2xl"/></a>
		</div>
		<p class="m-auto text-center"> {{ $t("landing-page.footer.codedWith") }} <i class="fas fa-heart"></i> {{ $t("landing-page.footer.in") }} <i class="fa-brands fa-vuejs"></i></p>
	</footer>
</template>

<script>
export default {
  name: 'Card'
}
</script>
