<template>
	<header class="m-auto mt-20 flex justify-evenly w-1/2 h-72">
		<div class="flex-row w-1/2 h-full space-y-8">
			<h1 class="text-5xl text-myBlue-900 font-extrabold">Hi, I am Constantin, CS student</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus dolores tenetur ipsam sapiente blanditiis ratione aperiam, eveniet sit. Eius quam quos amet tenetur similique deserunt dolores tempora maxime iste.</p>
			
			<div class="w-full grid place-items-center">
				<a class="bg-myBlue-900 text-white text-xl p-2 rounded-md font-bold" href= "http://duckduckgo.com" >Download Resume</a>
			</div>
		</div>

		<img class="rounded-full shadow-xl aspect-square" src="../assets/pp.jpeg" alt="picture of the webmaster">
	</header>
</template>

<script>
	export default {
		name: 'Card',
	}
</script>