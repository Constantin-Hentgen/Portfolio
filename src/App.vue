<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth">
		<transition name="fade" appear>
			<div class="bg-myBlue-200 min-h-screen text-lg">
				<router-view/>
			</div>
		</transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
  }
}
</script>

<style src="@/assets/css/tailwind.css" />


