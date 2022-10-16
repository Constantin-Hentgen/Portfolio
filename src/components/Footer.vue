<template>
	<footer class="main flex flex-col sm:flex-row justify-around w-full mb-5 mt-10 text-myBlue-900">
		<LanguageSwitcher />

		<div class="space-x-5 text-3xl text-center">
			<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank">
				<i class="fa-brands fa-linkedin-in"></i>
				</a>
			<a href="https://github.com/Constantin-Hentgen" target="_blank">
				<i class="fa-brands fa-github"></i>
			</a>
		</div>

		<p class="text-center"> {{ $t("landing-page.footer.codedIn") }} <i class="fa-brands fa-vuejs"></i> {{ $t("landing-page.footer.with") }} <i class="fas fa-heart-pulse"></i> </p>
	</footer>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'Card',
	components: {
		LanguageSwitcher,
	},
}
</script>
