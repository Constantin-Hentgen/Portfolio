<template>
	<transition name="fade" appear>
		<Header />
	</transition>

	<transition name="fade" appear>
		<main class="grid place-items-center mt-10 md:mt-24 space-y-10">
			<Card @click="setBackground" v-for="(project, index) in bank.projects" :key="index"
				:title="project.title"
				:year="project.year"
				:subtitle="project.subtitle"
				:content="project.content"
				:techs="project.techs"
				:imageURL="project.imageURL"
				:imageAlt="project.imageAlt"
				:id="project.id"
			/>
		</main>
	</transition>

	<transition name="fade" appear>
		<Footer />
	</transition>
</template>

<script>
	import Card from '@/components/Card.vue'
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	
	export default {
		name: 'Home',
		components: {
			Card,
			Header,
			Footer
		},
		data() {
			return { bank: [] }
		},
		created() {
			fetch("/data.json")
			.then(response => response.json())
			.then(data => (this.bank = data))
		}
	}
</script>