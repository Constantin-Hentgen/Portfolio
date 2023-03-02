<template>
	<header id="header" class="w-full flex-col text-center p-5 fixed gap-10">
		<button v-on:click="toggleNav()" class="text-myBlue-200 bg-myBlue-900 text-3xl mb-16 w-20 h-20 border-myBlue-200 border-2 rounded-full">
			<i v-if="!navOpen" class="fa fa-bars"></i>
			<i v-else class="fas fa-xmark"></i>
		</button>

		<nav class="hidden w-full h-full flex-col gap-5" id="nav">
			<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> {{$t("landing-page.nav.home")}} </router-link>
			<router-link :to="`/${$i18n.locale}/ambitions`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> {{$t("landing-page.nav.professional")}} </router-link>
			<router-link :to="`/${$i18n.locale}/experiences`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> {{$t("landing-page.nav.experience")}} </router-link>
			<router-link :to="`/${$i18n.locale}/commitment`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> {{$t("landing-page.nav.commitment")}} </router-link>
			<router-link :to="`/${$i18n.locale}/projects`" v-on:click.native="toggleNav()" class="text-myBlue-900 text-3xl"> {{$t("landing-page.nav.projects")}} </router-link>
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

