<template>
	<div>
		<router-link :to="`/${$i18n.locale}/project/${URL}`">
			<div
				id="card"
				class="
					mx-auto
					mb-10
					bg-white
					rounded-md
					p-2
					shadow-2xl 
					cursor-pointer 
					hover:to-blue-500
					flex
					w-11/12
					sm:w-5/6
					md:w-4/5
					lg:w-3/4
					xl:w-1/2
					space-y-5
				">

			<div class="flex h-44 w-full">
				<img class="h-44 w-36 sm:w-52 sm:h-44 object-cover object-center rounded-2xl mr-2 2xl:mr-10" :src="imageURL" :alt="imageAlt">
	
				<div class="flex w-full justify-evenly space-y-1 flex-col">
					<div class="flex flex-row justify-between">
						<h1 class="text-myBlue-900 font-bold text-2xl md:text-3xl"> {{ title }} </h1>
						<div class="space-x-3 hidden sm:flex sm:text-3xl">
							<i v-for="(tech, index) in techs" :key="index" :class=tech></i>
						</div>		
					</div>
	
					<div class="flex">
						<h3 class="bg-myBlue-900 h-full my-auto text-white font-extrabold grid place-items-center rounded-md px-2 text-sm sm:text-base md:text-lg"> {{ year }} </h3>
						<h2 class="text-sm md:text-lg h-3 ml-2 text-gray-500 font-light"> {{ subtitle }} </h2>
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
