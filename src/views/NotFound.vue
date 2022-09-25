<template>
	<div>	
		<div v-if="display" class="toFade grid place-items-center">
			<img src="../assets/404.svg" alt="404 error page not found" class="w-1/4">
		</div>
	
		<Spinner v-else/>
	</div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: {
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
		}, 1500);
	},
}
</script>

<style scoped>
.toFade {
	animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>