<template>
  <div id="app" class="font-sans text-gray-800 scroll-smooth bg-myBlue-200 min-h-screen text-lg">
		<transition name="fade" appear>
			<router-view />
		</transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="@/assets/css/tailwind.css" />


<style>
	#github:hover {
		outline: black 1px solid;
		border-radius: 10px;
	}

	.article {
		color: #21243D;
	}

	.article h1 {
		font-size: 2em;
		font-weight: 800;
	}

	.article h2 {
		font-size: 1.5em;
		font-weight: 700;
	}

	.article hr {
		background-color: #21243D;
		width: 100%;
		height: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.article ul {
		padding-left: 5%;
	}

	.article img {
		width:auto;
		margin:auto;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -10px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: 10px;
	}

	.article p, .article ul, .article h2 {
		margin-top: 20px;
	}

	.article ul, .article li {
		list-style-type: circle;
	}

	.dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>


