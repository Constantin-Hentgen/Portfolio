<template>
  <div>
		<Header />
		<div class="w-full grid place-items-center">
			<iframe src="https://www.irs.gov/pub/irs-pdf/fw3.pdf" height="1000px" width="500px" class="w-11/12 xl:w-1/2 rounded-md mt-10"></iframe>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'

	export default {
		name: 'cv',
		components: {
			Header
		},
		data() {
			return {
				source1: './static/cv.pdf'
			}
		}
	}
</script>