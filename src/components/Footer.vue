<template>
	<footer class="m-auto mt-12 md:mt-24 flex-col justify-evenly h-32 w-1/2">
		<div class="flex justify-center space-x-5 mb-5 text-3xl">
			<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank">
				<i class="fa-brands fa-linkedin"></i>
				</a>
			<a href="https://github.com/Constantin-Hentgen" target="_blank">
				<i class="fa-brands fa-github-square"></i>
			</a>
			<a href="https://discord.com/users/357214102361341967" target="_blank">
				<i class="fa-brands fa-discord"></i>
			</a>
		</div>
		<p class="m-auto text-center"> {{ $t("landing-page.footer.codedIn") }} <i class="fa-brands fa-vuejs"></i> {{ $t("landing-page.footer.with") }} <i class="fas fa-heart"></i> </p>
	</footer>
</template>

<script>
export default {
  name: 'Card'
}
</script>
