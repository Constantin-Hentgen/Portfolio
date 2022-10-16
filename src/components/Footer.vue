<template>
	<footer class="flex justify-around w-full mb-5 mt-5">
		<LanguageSwitcher />

		<div class="space-x-5 text-3xl">
			<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank">
				<i class="fa-brands fa-linkedin"></i>
				</a>
			<a href="https://github.com/Constantin-Hentgen" target="_blank">
				<i class="fa-brands fa-github-square"></i>
			</a>
			<a href="" target="_blank">
				<i class="fas fa-envelope"></i>
			</a>
		</div>

		<p> {{ $t("landing-page.footer.codedIn") }} <i class="fa-brands fa-vuejs"></i> {{ $t("landing-page.footer.with") }} <i class="fas fa-heart"></i> </p>
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
