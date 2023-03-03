<template>
	<router-link :to="`/${$i18n.locale}/experience/${URL}`" id="card"
		class="
			m-auto
			mb-10
			bg-myBlue-900
			text-myBlue-200
			shadow-2xl
			overflow-hidden
			rounded-md
			cursor-pointer
			flex
			w-80
		">


		<div class="flex flex-col">

			<div class="absolute mt-2 ml-2 text-myBlue-200">
				<i class="fa-solid fa-file-lines"></i>
			</div>

			<div class="flex w-full justify-evenly flex-col">
				<div class="flex flex-col justify-between p-1 text-white">
					<div>
						<h1 class="text-xl md:text-2xl w-full text-center"> {{ title }} </h1>
						
						<div class="space-x-3 hidden sm:flex sm:text-2xl">
							<i v-for="(tech, index) in techs" :key="index" :class=tech></i>
						</div>
					</div>

					<h2 class="text-sm md:text-lg h-3 ml-2 mb-2 text-center italic text-gray-500 font-light"> {{ subtitle }} - {{ year }} </h2>
				</div>

				<p class="text-sm md:text-base p-2 bg-myBlue-200 text-myBlue-900"> {{ content }} </p>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
  name: 'Portrait',
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

	#card:hover {
		transform: scale(1.05);
	}
</style>
