<template>
	<header id="header" class="w-full flex-col p-5 fixed">
		<div class="w-full h-20 grid place-items-end">
			<button v-on:click="toggleNav()" class="text-myBlue-200 bg-myBlue-900 text-3xl mb-16 w-20 h-20 shadow-xl border-myBlue-200 border-2 rounded-full">
				<i v-if="!navOpen" class="fa fa-bars"></i>
				<i v-else class="fas fa-xmark"></i>
			</button>
		</div>

		
		<nav class="hidden w-full h-full flex-col gap-10 p-12" id="nav">
			<h1 class="text-4xl font-bold">Go to...</h1>

			<ul>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> 
						<i class="fa fa-house"></i>
						{{$t("landing-page.nav.home")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/experiences`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> 
						<i class="fa fa-suitcase"></i>
						{{$t("landing-page.nav.experience")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/projects`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> 
						<i class="fa-solid fa-vial"></i>
						{{$t("landing-page.nav.projects")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/ambitions`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> 
						<i class="fa fa-bullseye"></i>
						{{$t("landing-page.nav.professional")}} 
					</router-link>
				</li>
				<li class="mt-5">
					<router-link :to="`/${$i18n.locale}/commitment`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> 
						<i class="fa-solid fa-people-group"></i>
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
			navOpen: false
		}
	},
	methods: {
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

