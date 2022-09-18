<template>
	<div>	
		<div v-if="display" class="toFade">
			<transition name="fade" appear>
				<div
				class="
					w-11/12
					m-auto
					pt-10
					md:mt-20
					flex-col
					space-y-5
					justify-center
					md:space-x-10
					md:w-3/4
					xl:w-1/2
					lg:mt-0
				">
					<img class="w-48 h-48 mx-auto md:w-60 md:h-60 shadow-2xl rounded-full pp" src="../assets/pp.jpeg" alt="picture of the webmaster">
		
					<h1 class="text-3xl  md:text-5xl text-center md:text-left text-myBlue-900 font-extrabold">Constantin, {{ $t('landing-page.student') }}</h1>
					<p class="text-center md:text-left w-full"> {{ $t('landing-page.description') }} <i class="fas fa-arrow-down-wide-short"></i></p>
				</div>
			</transition>
		</div>
	
		<Spinner v-else/>
	</div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: {
		Spinner
	},
	data() {
		return {
			display: false
		}
	},
	created() {
		setTimeout(() => {
			this.display = true;
		}, 1500);
	},
}
</script>

<style scoped>
.toFade {
	animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>