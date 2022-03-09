<template>
	<router-view/>
</template>

<style lang="postcss">

	@import url('https://api.fonts.coollabs.io/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

	html {
		scroll-behavior: smooth;
	}

	body {
		@apply bg-myBlue-200 w-full h-full;
	}

	body > * {
		@apply font-Inter;
	}

	#app {
		@apply w-full h-full p-5;
	}

</style>

<style>
	* {
		-webkit-tap-highlight-color: transparent;
	}
</style>