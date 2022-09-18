<template>
	<div>
		<transition name="fade" class="toFade" appear>
			<Header />
		</transition>
	
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
					md:flex
					md:flex-row
					justify-center
					md:space-x-10
					md:w-3/4
					xl:w-1/2
					lg:mt-0
				">
					<img class="w-48 h-48 mx-auto my-auto md:w-60 md:h-60 shadow-2xl rounded-full pp" src="../assets/pp.jpeg" alt="picture of the webmaster">
		
					<div class="flex-row w-full sm:w-2/3 mx-auto h-full space-y-8">
						<h1 class="text-3xl  md:text-5xl text-center md:text-left text-myBlue-900 font-extrabold"> <span>Constantin,</span> <br> <span>{{ $t('landing-page.student') }}</span> </h1>
			
						<p class="text-center md:text-left w-full"> {{ $t('landing-page.description') }} <i class="fas fa-arrow-down-wide-short"></i></p>
			
						<div class="w-full grid place-items-center">
							<router-link :to="`/${$i18n.locale}/cv`" class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold">
								{{ $t('landing-page.cv') }} <i class="fas fa-file-pdf"></i>
							</router-link>
						</div>
					</div>
				</div>
			</transition>
		</div>
	
		<Spinner v-else/>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: {
		Header,
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