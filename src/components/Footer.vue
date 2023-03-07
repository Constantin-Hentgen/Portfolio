<template>
	<footer class="main flex flex-col justify-evenly w-full mb-5 mt-12 space-y-5 text-myBlue-900">
		<LanguageSwitcher v-if="$route.name == 'home'"/>
		<p class="text-center flex flex-col-reverse sm:flex-row justify-center">
			<span>
				{{ $t("landing-page.footer.codedIn") }} 
				<i class="fa-brands fa-vuejs" /> 
				{{ $t("landing-page.footer.with") }} 
				<i class="fas fa-heart-pulse" /> 
			</span>

			<span class="hidden sm:flex">&nbsp;|&nbsp;</span>

			<span>
				{{ $t("landing-page.footer.license") }}
				<i class="fa-brands fa-creative-commons"/>
			</span>

			<span class="hidden sm:flex">&nbsp;|&nbsp;</span>

			<span> 2023 </span>
		</p>
	</footer>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'Card',
	components: {
		LanguageSwitcher,
	}
}
</script>
