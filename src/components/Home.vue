<template>
	<div class="content">
		<NavHeader></NavHeader>
		<Guang></Guang>
		<Slider></Slider>
		<GussLike></GussLike>
		<Footer></Footer>
	</div>
</template>

<script>
import NavHeader from './NavHeader';
import Guang from './Guang.vue';
import Slider from './Slider.vue';
import GussLike from './GussLike.vue';
import Footer from './Footer.vue';
export default {
	name: 'home',
	data() {
		return {};
	},
	components: {
		NavHeader: NavHeader,
		Guang: Guang,
		Slider: Slider,
		GussLike: GussLike,
		Footer: Footer
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../assets/css/home.css");
</style>
