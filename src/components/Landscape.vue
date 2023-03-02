<template>
	<div  class="
		w-full
		sm:w-5/6
		md:w-4/5
		lg:w-3/4
		xl:w-1/2 mx-auto
		ease-in-out
		duration-300
		hover:scale-105
	">
		<router-link :to="`/${$i18n.locale}/project/${URL}`">
			<div
				id="card"
				class="
					mx-auto
					bg-myBlue-900
					text-myBlue-200
					rounded-lg
					h-40
					pr-5
					overflow-hidden
					shadow-2xl 
					cursor-pointer 
					flex
					w-full
					space-y-5
				">

			<div class="flex h-36 sm:h-44 w-full">
				<img class="h-full w-32 sm:w-56 object-cover object-center rounded-sm mr-4 2xl:mr-10" :src="'/' + imageURL" :alt="imageAlt">
	
				<div class="flex w-full justify-evenly sm:space-y-1 flex-col">
					<div class="flex-col">
						<div class="flex flex-row justify-between">
							<h1 class="text-xl md:text-3xl"> {{ title }} </h1>
							<div class="space-x-3 hidden sm:flex sm:text-3xl">
								<i v-for="(tech, index) in techs" :key="index" :class=tech></i>
							</div>
						</div>
		
						<h2 class="text-sm md:text-lg h-3 italic text-gray-500 font-light"> {{ subtitle }} - {{ year }} </h2>
					</div>

					<p class="text-sm sm:text-base md:text-lg"> {{ content }} </p>
				</div>
			</div>
		</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'Landscape',
  props: {
		id: Number,
		techs: Array,
    title: String,
		content: String,
		year: String,
		subtitle: String,
		imageURL: String,
		imageAlt: String,
		URL: String
  }
}
</script>

<style lang="css" scoped>
	#card {
		transition: ease-in-out;
		transition-duration: 0.15s;
	}
</style>
