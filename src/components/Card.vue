<template>
	<div @click="this.$router.push(`/${id}`)"
		class="
			w-full flex 
			bg-white 
			rounded-3xl
			p-3
			shadow-2xl 
			cursor-pointer 
			hover:to-blue-500
			flex-col

			md:flex-row
			md:w-2/3
			xl:w-1/2
		"
	>

		<div class="w-full md:w-1/3 bg-myBlue-900 rounded-xl mr-10 overflow-hidden object-fill">
			<img class="object-none h-48 w-full" src="../assets/coding.jpeg" alt="project's thumbnail">
		</div>

		<div class="w-full xl-w-2/3 flex justify-evenly flex-col">
			<div class="flex-row flex justify-between">
				<h1 class="text-myBlue-900 font-bold text-2xl md:text-3xl"> {{ title }} </h1>
				<div class="space-x-3">
					<fa v-for="(tech, index) in techs" :key="index" :icon='["fab", tech ]' size="2xl" color="#21243D"/>
				</div>
			</div>

			<div class="flex">
				<h3 class="bg-myBlue-900 text-white font-extrabold grid place-items-center rounded-full px-2"> {{ year }} </h3>
				<h2 class="text-xl ml-6 text-gray-500 font-light"> {{ subtitle }} </h2>
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
		imageName: String,
  }
}
</script>
