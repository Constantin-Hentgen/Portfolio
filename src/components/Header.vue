<template>
  <div>
		<header class="bg-myBlue-900 z-10 w-full shadow-md fixed top-0">
			<div class="topnav w-full bg-myBlue-900  pl-10 text-myBlue-200 font-semibold" id="myTopnav">
				<a class="icon" v-on:click="toggleNav()">
					<i class="fa fa-bars"></i>
				</a>

				<router-link :to="`/${$i18n.locale}`" id="info"> Constantin Hentgen </router-link>

				<router-link :to="`/${$i18n.locale}`" class="hover:bg-white hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.home")}} </router-link>
				<router-link :to="`/${$i18n.locale}/professional`" class="hover:bg-white hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.professional")}} </router-link>
				<router-link :to="`/${$i18n.locale}/experience`" class="hover:bg-white hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.experience")}} </router-link>
				<router-link :to="`/${$i18n.locale}/commitment`" class="hover:bg-white hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.commitment")}} </router-link>
				<router-link :to="`/${$i18n.locale}/projects`" class="hover:bg-white hover:text-myBlue-900 text-3xl focus:bg-white focus:text-myBlue-900"> {{$t("landing-page.nav.projects")}} </router-link>
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
			navBank: ['home', 'projects', 'experience']
		}
	},
	methods: {
		toggleNav() {
			var x = document.getElementById("myTopnav");
			var y = document.getElementById("info");
			var routerView = document.getElementById('main');
			if (!x.className.includes("responsive")) {
				x.className += " responsive pt-1 pb-1";
				y.style.display = "none";
				routerView.style.filter = "blur(5px)";
			} else {
				x.className = "topnav w-full bg-myBlue-900  pl-10 text-white font-semibold";
				y.style.display = "block";
				routerView.style.filter = "blur(0px)";
			}
		},
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

