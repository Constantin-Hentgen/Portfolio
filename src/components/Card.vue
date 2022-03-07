<template>
	<div @click="this.$router.push(`/${id}`)" id="card"
		class="
			w-full flex 
			bg-white 
			rounded-3xl
			p-3
			shadow-2xl 
			cursor-pointer 
			hover:to-blue-500
			flex-col
			md:w-3/4
			xl:w-1/2
			md:flex-row
			space-y-5
		">

		<div class="w-full h-44 md:w-1/3 bg-myBlue-900 rounded-xl mr-2 2xl:mr-10 overflow-hidden object-fill">
			<img class="h-full w-full object-cover object-center" :src="imageURL" alt="project's thumbnail">
		</div>

		<div class="w-full xl-w-2/3 flex justify-evenly space-y-1 flex-col">
			<div class="flex-row flex justify-between">
				<h1 class="text-myBlue-900 font-bold text-2xl md:text-3xl"> {{ title }} </h1>
				<div class="space-x-3">
					<fa v-for="(tech, index) in techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
				</div>
			</div>

			<div class="flex">
				<h3 class="bg-myBlue-900 h-full my-auto text-white font-extrabold grid place-items-center rounded-full px-2"> {{ year }} </h3>
				<h2 class="text-sm md:text-lg ml-2 text-gray-500 font-light"> {{ subtitle }} </h2>
			</div>
			<p> {{ content }} </p>
		</div>
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
		imageURL: String
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
