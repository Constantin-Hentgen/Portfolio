<template>
	<router-link :to="`/${$i18n.locale}/experience/${URL}`" id="card"
		class="
			m-auto
			mb-10
			overflow-hidden
			bg-myBlue-900
			text-myBlue-200
			rounded-lg
			shadow-2xl 
			cursor-pointer
			flex
			w-80
		">

		<div class="flex flex-col">
			<div class="flex w-full justify-evenly flex-col">
				<div class="flex flex-col justify-between p-2">
					<div>
						<h1 class="text-xl md:text-2xl w-full text-center"> {{ title }} </h1>
						
						<div class="space-x-3 hidden sm:flex sm:text-2xl">
							<i v-for="(tech, index) in techs" :key="index" :class=tech></i>
						</div>
					</div>

					<h2 class="text-sm md:text-lg h-3 ml-2 text-center italic text-gray-500 font-light"> {{ subtitle }} - {{ year }} </h2>
				</div>

				<img class="w-full mt-2 h-24 object-cover object-center" :src="'/' + imageURL" :alt="imageAlt">

				<p class="text-sm sm:text-base md:text-lg p-2"> {{ content }} </p>
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
