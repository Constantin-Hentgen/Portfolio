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
		<img class="w-48 h-48 mx-auto md:w-60 md:h-60 shadow-2xl rounded-full pp" src="../assets/pp.jpeg" alt="picture of the webmaster">
		<h1 class="text-3xl  md:text-5xl text-center md:text-left text-myBlue-900 font-extrabold">Constantin, {{ $t('landing-page.student') }}</h1>
		<p class="text-center md:text-left w-full"> {{ $t('landing-page.description') }} <i class="fas fa-arrow-down-wide-short"></i></p>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>