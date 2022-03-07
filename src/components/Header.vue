<template>
	<header
	class="
		m-auto
		md:mt-20
		flex-col
		space-y-5
		md:flex
		md:flex-row
		justify-center
		md:space-x-10
		md:w-3/4
		xl:w-1/2
	">
		<img class="w-48 h-48 mx-auto my-auto md:w-60 md:h-60 shadow-2xl rounded-full" src="../assets/pp.jpeg" alt="picture of the webmaster">

		<div class="flex-row w-full sm:w-2/3 mx-auto h-full space-y-8">
			<h1 class="text-3xl  md:text-5xl text-center md:text-left text-myBlue-900 font-extrabold">Constantin, <br> étudiant ingénieur</h1>
			<p class="text-center md:text-left w-full">Je suis un étudiant <fa icon="graduation-cap" size="l" /> de première année en ingénierie informatique <fa icon="shield" size="l" />.
Vous trouverez tous mes projets ci-dessous <fa icon="arrow-down-wide-short" size="l" /></p>

			<div class="w-full grid place-items-center">
				<a class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold" href= "./static/cv.pdf" target="_blank">Consulter mon CV<fa class="ml-2" icon="file-pdf" size="l" /></a>
			</div>
		</div>

	</header>
</template>

<script>
	export default { name: 'Card' }
</script>