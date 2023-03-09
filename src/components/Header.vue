<template>
	<header id="header" class="w-full flex-col p-5 fixed z-40 transition duration-200 opacity-100 active:animate-fade-in-out"
	:class="{
		'opacity-100': navOpen,
		'opacity-0': !navOpen
	}"
	>
		<a 
			href="#header" 
			class="hidden lg:flex"
			v-show="rawProgression != 0"
		>
			<i class="fa-solid fa-circle-up absolute right-0 top-0 lg:mr-40 xl:mr-56 mt-108 text-5xl" />
		</a>

		<div
			class="w-full flex justify-between md:w-2/3 mx-auto p-2 h-16 md:h-20 rounded-full bg-transparent"
			:class="{ 
				'w-full bg-myBlue-900': ($route.name != 'home' && !navOpen),
				'flex-col' : (navOpen)
			}" 
		>
			<div v-show="($route.name === 'home') && (!navOpen)" class="space-x-5 text-3xl md:text-4xl text-center">
				<a href="https://www.linkedin.com/in/constantin-hentgen/" target="_blank">
					<i class="fa-brands fa-linkedin"></i>
					</a>
				<a href="https://github.com/Constantin-Hentgen" target="_blank">
					<i class="fa-brands fa-github"></i>
				</a>
			</div>

			<router-link 
				:to="`/${$i18n.locale}`"
				v-on:click.native="toggleNav()"
				v-show="$route.name !== 'home' && !navOpen"
			> 
				<img class="w-12 h-12 md:w-16 md:h-16 shadow-2xl rounded-full" src="../assets/pp.jpeg" alt="portrait picture of the webmaster">
			</router-link>

			<div v-show="$route.name !== 'home' && !navOpen" class="grid place-items-center pt-2 sm:pt-3">
				<h1
					class="text-myBlue-200 grid place-items-center text-xl md:text-2xl md:font-semibold text-center"
					v-show="isProjectPage"
				>
					{{ $t("projects." + $route.name + ".title") }} 
				</h1>

				<h1
					class="text-myBlue-200 grid place-items-center text-xl md:text-2xl md:font-semibold text-center"
					v-show="isExperiencePage"
				>
					{{ $t("experiences." + $route.name + ".title") }} 
				</h1> 

				<h1
					class="text-myBlue-200 grid place-items-center text-xl md:text-2xl md:font-semibold text-center"
					v-show="!isProjectPage && !isExperiencePage"
				>
					{{ $t("landing-page.nav." + $route.name) }}
				</h1>

				<div class="grid md:text-xl text-base px-3 place-items-center border-4 border-myBlue-900 bg-myBlue-200 rounded-full text-myBlue-900 my-auto">
					<span v-show="height > 0">
						<span class="font-semibold"> {{ progression }} % </span>
					</span>
				</div>
			</div>

			<button v-on:click="toggleNav()" 
				:class="{ 
					'text-myBlue-200 bg-myBlue-900 ' : ($route.name == 'home' || navOpen),
					'text-myBlue-900 bg-myBlue-200 ' : !($route.name == 'home' || navOpen),
					'self-end' : (navOpen)
				}"
				class="text-xl md:text-2xl w-12 md:w-16 h-full shadow-xl rounded-full transition duration-500"
			>
				<i v-if="!navOpen" class="fa fa-bars" />
				<i v-else class="fas fa-xmark" />
			</button>
		</div>

		<nav class="hidden w-full h-full flex-col gap-10 p-12" id="nav">
			<h1 class="text-3xl md:text-5xl font-bold mx-auto"> {{ $t("landing-page.nav.goto") }}</h1>
			
			<ul class="mx-auto">
				<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa-solid fa-house"></i>
						{{$t("landing-page.nav.home")}} 
					</li>
				</router-link>
				<router-link :to="`/${$i18n.locale}/experiences`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa fa-suitcase" />
						{{$t("landing-page.nav.experiences")}} 
					</li>
				</router-link>
				<router-link :to="`/${$i18n.locale}/education`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa-solid fa-graduation-cap"></i>
						Éducation
					</li>
				</router-link>
				<router-link :to="`/${$i18n.locale}/projects`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa-solid fa-cubes"></i>
						{{$t("landing-page.nav.projects")}} 
					</li>
				</router-link>
				<router-link :to="`/${$i18n.locale}/ambitions`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa-solid fa-bullseye" />
						{{$t("landing-page.nav.ambitions")}} 
					</li>
				</router-link>
				<router-link :to="`/${$i18n.locale}/commitment`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-2xl md:text-3xl"> 
					<li class="mt-5">
						<i class="fa-solid fa-people-group" />
						{{$t("landing-page.nav.commitment")}} 
					</li>
				</router-link>
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
			rawProgression: 0,
			height: 0,
			isProjectPage: false,
			isExperiencePage: false
		}
	},
	watch: {
		'$route'() {
			this.getPageNature();
		}
	},
	created () {
		this.getPageNature();
		window.addEventListener('click', this.getPageNature);
		window.addEventListener('load', this.getPageNature);

		window.addEventListener('scroll', this.getProgression);
		window.addEventListener('click', this.getProgression);
		window.addEventListener('load', this.getProgression);
		window.addEventListener('resize', this.getProgression);
		window.addEventListener('orientationchange', this.getProgression);

		this.height = document.body.scrollHeight;
		this.windowHeight = window.innerHeight;
	},
	unmounted () {
		window.removeEventListener('click', this.getPageNature);
		window.removeEventListener('load', this.getPageNature);

		window.removeEventListener('scroll', this.getProgression);
		window.removeEventListener('click', this.getProgression);
		window.removeEventListener('load', this.getProgression);
		window.removeEventListener('resize', this.getProgression);
		window.removeEventListener('orientationchange', this.getProgression);
	},
	methods: {
		getPageNature() {
			if (this.$route.path.includes('project/')) {
				this.isProjectPage = true;
				this.isExperiencePage = false;
			} else if (this.$route.path.includes('experience/')) {
				this.isProjectPage = false;
				this.isExperiencePage = true;
			} else {
				this.isProjectPage = false;
				this.isExperiencePage = false;
			}
		},
		getProgression() {
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

<style scoped>
@keyframes fade-in-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in-out {
  animation: fade-in-out 1s ease-in-out;
}

li:hover {
	border-radius: 2px;
	outline-color: #001d3d;
	outline-style: dashed;
	outline-offset: 5px;
}

</style>