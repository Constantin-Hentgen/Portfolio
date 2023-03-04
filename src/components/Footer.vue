<template>
	<footer class="main flex flex-col justify-evenly w-full mb-5 mt-20 text-myBlue-900">
		<LanguageSwitcher v-if="$route.name == 'home'"/>
		<p class="text-center"> {{ $t("landing-page.footer.codedIn") }} <i class="fa-brands fa-vuejs"></i> {{ $t("landing-page.footer.with") }} <i class="fas fa-heart-pulse"></i> </p>
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
