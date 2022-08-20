<template>
  <div v-if="display">
		<Header />
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
					<a class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold" href= "/static/cv.pdf" target="_blank">
						{{ $t('landing-page.cv') }}
						<i class="fas fa-file-pdf"></i>
					</a>
				</div>
			</div>
		</div>

		<main class="mt-10 md:mt-24 space-y-10">
			<Card v-for="(project, index) in $t('projects')" :key="index"
				:title="project.translatable.title"
				:year="project.translatable.year"
				:subtitle="project.translatable.subtitle"
				:content="project.translatable.content"
				:techs="project.techs"
				:imageURL="project.imageURL"
				:imageAlt="project.translatable.imageAlt"
				:URL="project.URL"
			/>
		</main>
	</div>

	<Spinner v-else/>
</template>

<script>
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: {
		Card,
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
		}, 2000);
	}
}
</script>
