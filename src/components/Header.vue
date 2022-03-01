<template>
	<header class="
		m-auto
		mt-20
		flex
		flex-col
		md:flex-row-reverse
		justify-evenly
		w-11/12
		md:w-1/2
		h-72
	">
		<img class="w-44 h-44 md:w-60 md:h-60 rounded-full m-auto" src="../assets/pp.jpeg" alt="picture of the webmaster">

		<div class="flex-row w-11/12 md:w-1/2 h-full space-y-8">
			<h1 class="text-3xl md:text-5xl text-myBlue-900 font-extrabold">Hi, I am Constantin, CS student</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus dolores tenetur ipsam sapiente blanditiis ratione aperiam, eveniet sit.</p>
			
			<div class="w-full grid place-items-center">
				<a class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold" href= "http://duckduckgo.com" >Download Resume</a>
			</div>
		</div>

	</header>
</template>

<script>
	export default {
		name: 'Card',
	}
</script>