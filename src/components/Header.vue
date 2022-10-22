<template>
  <div>
		<header id="xprime" class="bg-myBlue-900 z-10 w-full shadow-md fixed top-0">
			<div class="topnav w-full bg-myBlue-900 md:flex md:justify-center  pl-10 md:pl-0 text-myBlue-200 font-semibold" id="myTopnav">
				<a class="icon" v-on:click="toggleNav()">
					<i v-if="!navOpen" class="fa fa-bars"></i>
					<i v-else class="fas fa-xmark text-xl"></i>
				</a>

				<router-link :to="`/${$i18n.locale}`" id="info"> Constantin Hentgen </router-link>

				<router-link :to="`/${$i18n.locale}`" v-on:click.native="toggleNav()" class="hover:bg-white w-4/5 rounded-lg md:rounded-none md:w-full hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.home")}} </router-link>
				<router-link :to="`/${$i18n.locale}/ambitions`" v-on:click.native="toggleNav()" class="hover:bg-white w-4/5 rounded-lg md:rounded-none md:w-full hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.professional")}} </router-link>
				<router-link :to="`/${$i18n.locale}/experiences`" v-on:click.native="toggleNav()" class="hover:bg-white w-4/5 rounded-lg md:rounded-none md:w-full hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.experience")}} </router-link>
				<router-link :to="`/${$i18n.locale}/commitment`" v-on:click.native="toggleNav()" class="hover:bg-white w-4/5 rounded-lg md:rounded-none md:w-full hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.commitment")}} </router-link>
				<router-link :to="`/${$i18n.locale}/projects`" v-on:click.native="toggleNav()" class="hover:bg-white w-4/5 rounded-lg md:rounded-none md:w-full hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.projects")}} </router-link>
			</div>
		</header>
  </div>
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
			var x = document.getElementById("myTopnav");
			var xprime = document.getElementById("xprime");
			var y = document.getElementById("info");

			if (!x.className.includes("responsive")) {
				this.navOpen = true;
				if (window.innerWidth < 700) {
					xprime.animate(
						[
							{ transform: 'translateY(-400px)' },
							{ transform: 'translateY(0px)' }
						],
						{
							duration: 225
						}
					);
					content.style.filter = "blur(3px)";
					x.className += " responsive";
				}
				
				y.style.display = "none";
			} else {
				this.navOpen = false;
				content.style.filter = "blur(0px)";

				x.animate(
					[
						{ transform: 'translateX(-500px)'},
						{ transform: 'translateY(0)' }
					],
					{
						duration: 200
					}
				);

				// le nouveau afit 400px de trop et il se fait resize

				x.className = "topnav w-full bg-myBlue-900  pl-10 text-white font-semibold";
				y.style.display = "block";
			}
		}
	}
}
</script>

<style>
* {
	-webkit-tap-highlight-color: transparent;
}

.dropdown-fade-enter-active, .dropdown-fade-leave-active {
	transition: all .1s ease-in-out;
}
.dropdown-fade-enter, .dropdown-fade-leave-to {
	opacity: 0;
	transform: translateY(-12px);
}

/* NEW TOP NAV */

.topnav {
  overflow: hidden;
}

.topnav a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#info {
	display: none;
}

.topnav .icon, .topnav .info {
  display: none;
}

@media screen and (max-width: 750px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav .info {
    float: left;
    display: block;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }

  .topnav.responsive {
		position: relative;
	}

	#info {
		display: block;
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

@media screen and (min-width: 751px) {
	#myTopnav {
		display: flex;
		justify-content: center;
	}
	#info {
		display: none !important;
	}
}
</style>

