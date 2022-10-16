<template>
  <div>
		<header class="bg-myBlue-900 z-10 w-full shadow-md sticky top-0 pl-10">
			<div class="topnav w-full bg-myBlue-900" id="myTopnav">
				<a href="javascript:void(0);" class="icon" v-on:click="toggleNav()">
					<i class="fa fa-bars"></i>
				</a>
				<router-link :to="`/${$i18n.locale}`" id="home" class="hover:text-gray-600 uppercase"> {{$t("landing-page.nav.home")}} </router-link>
				<router-link :to="`/${$i18n.locale}/projects`" id="projects" class="hover:text-gray-600 uppercase">	{{$t("landing-page.nav.projects")}} </router-link>
				<router-link :to="`/${$i18n.locale}/experience`" id="experience" class="hover:text-gray-600 uppercase">	{{$t("landing-page.nav.experience")}} </router-link>
			</div>
		</header>
  </div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			menuOpen: false,
			navBank: ['home', 'projects', 'experience'],
			navIndex : 0 // si = 0 alors bind la classe highlight (définition à faire sur l’élément directement)
		}
	},
	methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

		toggleNav() {
			var x = document.getElementById("myTopnav");
			if (x.className === "topnav") {
				x.className += " responsive";
			} else {
				x.className = "topnav";
			}
		}
	},
	computed: {
		highlight() {
			// identifier le path actif
			let pageUrl = this.$route.name;

			// identifier chacuns des éléments du menu [par les id HTML]

			switch (pageUrl) {
				case 'home':
					this.navIndex = 0;
					break;
				case 'projects':
					this.navIndex = 1;
					break;
				case 'experience':
					this.navIndex = 2;
					break;
				default:
					console.log('Page unknown');
			}

			console.log(this.navIndex);
			// affecter la classe css highlight à l’élément correspondant
		}
	}
}
</script>

<style scoped>
.dropdown-fade-enter-active, .dropdown-fade-leave-active {
	transition: all .1s ease-in-out;
}
.dropdown-fade-enter, .dropdown-fade-leave-to {
	opacity: 0;
	transform: translateY(-12px);
}
.highlight {
	color: white;
	background: black;
}


/* NEW TOP NAV */


.topnav {
  overflow: hidden;
	transition: width 2s linear 1s;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
		position: relative;
	}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>

