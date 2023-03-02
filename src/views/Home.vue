<template>
	<div
	class="
		w-11/12
		md:w-3/4
		xl:w-1/2

		mx-auto
		flex-col
		justify-center
		space-y-5
		md:space-x-10
	">
		<img class="w-40 h-40 sm:w-48 mt-20 sm:h-48 mx-auto md:w-60 md:h-60 shadow-2xl rounded-full" src="../assets/pp.jpeg" alt="picture of the webmaster">
		<h1 class="text-3xl  md:text-4xl text-center md:text-left text-myBlue-900 font-extrabold">Constantin, {{ $t('landing-page.student') }} <i class="fas fa-shield-halved text-2xl md:text-3xl"></i></h1>
		<p class="text-left p-5 w-full text-md"> {{ $t('landing-page.description') }} </p>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>