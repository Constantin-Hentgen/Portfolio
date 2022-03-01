<template>
	<div class="w-1/2 flex bg-white rounded-3xl p-4 shadow-2xl cursor-pointer hover:to-blue-500">
		<div class="w-1/3 bg-myBlue-900 rounded-xl mr-10 overflow-hidden object-fill">
			<img class="object-none h-48 w-full" src= "../assets/coding.jpeg" alt="project's thumbnail">
		</div>

		<div class="w-2/3 flex justify-evenly flex-col">
			<div class="flex justify-between">
				<h1 class="text-myBlue-900 font-bold text-3xl"> {{ title }} </h1>
				<div class="space-x-3">
					<fa v-if="test" :icon='["fab", "js" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "java" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "python" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "android" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "fedora" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "linux" ]' size="2xl" color="#21243D"/>
					<fa v-if="test" :icon='["fab", "windows" ]' size="2xl" color="#21243D"/>
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
		tech: Boolean,
    title: String,
		content: String,
		year: String,
		subtitle: String,
  },
	data() {
		return {
			test:true,
		}
	}
}
</script>
