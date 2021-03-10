<template lang="pug">
	main.main
		<Header :page="key" />
		.main__content
			<Index :page="key" />
		<Footer :page="key" />
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Index from './views/Index';

import { on_load_mixin } from "./system/statistics";

export default {
	mixins: [
		on_load_mixin
	],
	components: {
		Header,
		Footer,
		Index
	},
	computed: {
		key() {
			return this.$route.meta.key !== undefined
				? this.$route.meta.key : this.$route;
		},
	},
};
</script>

<style lang="stylus">
.main
	pos relative
</style>
