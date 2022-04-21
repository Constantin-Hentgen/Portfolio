<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth bg-myBlue-200 min-h-screen text-lg">
		<transition name="fade" appear>
			<router-view/>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="@/assets/css/tailwind.css" />


