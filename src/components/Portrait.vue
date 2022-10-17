<template>
	<router-link :to="`/${$i18n.locale}/project/${URL}`">
		<div
			id="card"
			class="
				m-auto
				mb-10
				bg-white
				rounded-md
				p-5
				shadow-2xl 
				cursor-pointer 
				hover:to-blue-500
				flex
				w-80
				h-108
				space-y-5
			">

		<div class="flex flex-col">
			
			<div class="flex w-full justify-evenly space-y-1 flex-col">
				<div class="flex flex-row justify-between">
					<h1 class="text-myBlue-900 font-bold text-xl md:text-2xl"> {{ title }} </h1>
					<div class="space-x-3 hidden sm:flex sm:text-2xl">
						<i v-for="(tech, index) in techs" :key="index" :class=tech></i>
					</div>		
				</div>

				<img class="h-44 w-full object-cover object-center" :src="'/' + imageURL" :alt="imageAlt">

				<div class="flex">
					<h3 class="bg-myBlue-900 h-full my-auto text-white font-extrabold grid place-items-center rounded-md px-2 text-sm sm:text-base md:text-lg"> {{ year }} </h3>
					<h2 class="text-sm md:text-lg h-3 ml-2 text-gray-500 font-light"> {{ subtitle }} </h2>
				</div>
				<p class="text-sm sm:text-base md:text-lg"> {{ content }} </p>
			</div>
		</div>
	</div>
	</router-link>
</template>

<script>
export default {
  name: 'Card',
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
