<template>
	<header id="header" class="w-full flex-col p-5 fixed z-40">
		<div
			:class="{ 
				'w-full bg-myBlue-900': ($route.name != 'home' && !navOpen),
				'flex-col' : (navOpen)
			}" 
			class="w-full flex justify-between sm:w-3/4 mx-auto p-2 h-16 rounded-full bg-transparent"
		>
			<div v-if="($route.name === 'home') && (!navOpen)" class="space-x-5 text-3xl text-center">
				<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank">
					<i class="fa-brands fa-linkedin"></i>
					</a>
				<a href="https://github.com/Constantin-Hentgen" target="_blank">
					<i class="fa-brands fa-github"></i>
				</a>
			</div>

			<div v-if="$route.name != 'home' && !navOpen" class="flex justify-between w-4/5">
					<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()"> 
						<img class="w-12 h-12 shadow-2xl rounded-full" src="../assets/pp.jpeg" alt="portrait picture of the webmaster">
					</router-link>
		
					<h1 class="text-myBlue-200 my-auto text-xl w-48 mr-1 text-center"> {{ $route.name }} </h1>
					<div class="hidden md:flex text-myBlue-200 my-auto">
						progression : &nbsp; <span v-if="height > 0" class="w-16 font-semibold"> {{ progression }} % </span>
					</div>
			</div>

			<button v-on:click="toggleNav()" 
				:class="{ 
					'text-myBlue-200 bg-myBlue-900 ' : ($route.name == 'home' || navOpen),
					'text-myBlue-900 bg-myBlue-200 ' : !($route.name == 'home' || navOpen),
					'self-end' : (navOpen)
				}"
				class="text-xl w-12 h-full shadow-xl rounded-full"
			>
				<i v-if="!navOpen" class="fa fa-bars" />
				<i v-else class="fas fa-xmark" />
			</button>
		</div>

		<nav class="hidden w-full h-full flex-col gap-10 p-12" id="nav">
			<h1 class="text-3xl font-bold">Go to...</h1>
			
			<ul>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl"> 
						<i class="fa fa-house"></i>
						{{$t("landing-page.nav.home")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/experiences`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl"> 
						<i class="fa fa-suitcase" />
						{{$t("landing-page.nav.experience")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/projects`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl"> 
						<i class="fa-solid fa-vial"></i>
						{{$t("landing-page.nav.projects")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/ambitions`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl"> 
						<i class="fa fa-bullseye" />
						{{$t("landing-page.nav.professional")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/commitment`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl"> 
						<i class="fa-solid fa-people-group" />
						{{$t("landing-page.nav.commitment")}} 
					</router-link>
				</li>
			</ul>
		</nav>

	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			navOpen: false,
			progression: 0,
			height: 0
		}
	},
	created () {
		window.addEventListener('scroll', this.getProgression);
		this.height = document.body.scrollHeight;
  	},
  	unmounted () {
    	window.removeEventListener('scroll', this.getProgression);
  	},
	methods: {
		getProgression(event) {
			this.height = document.body.scrollHeight
			this.rawProgression = window.scrollY
			this.progression = Math.round(100*(window.scrollY+window.innerHeight)/this.height)
		},
		toggleNav() {
			var header = document.getElementById("header");
			var nav = document.getElementById("nav");
			if (!this.navOpen) {
				header.style.height = window.innerHeight + "px";
				header.style.background = "#e5e5e5";
				nav.style.display = "flex";
				this.navOpen = true;
			} else {
				header.style.height = "50px";
				header.style.background = "transparent";
				nav.style.display = "none";
				this.navOpen = false;
			}
		}
	}
}
</script>