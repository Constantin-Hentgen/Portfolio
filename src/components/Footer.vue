<template>
	<footer class="main flex flex-col justify-evenly w-full mb-5 mt-20 space-y-5 text-myBlue-900">
		<LanguageSwitcher v-if="$route.name == 'home'"/>
		<p class="text-center"> 
			{{ $t("landing-page.footer.codedIn") }} 
			<i class="fa-brands fa-vuejs" /> 
			{{ $t("landing-page.footer.with") }} 
			<i class="fas fa-heart-pulse" /> 
			| sous license
			<i class="fa-brands fa-creative-commons"/>
			| 2023
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
