export default {
	namespaced: true,
	state: {
		mobile: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
		countries: []
	},
	actions: {
		load({commit}, list) {
			return new Promise((resolve => {
				commit('load_countries_data', list);
				resolve();
			}));
		}
	},
	mutations: {
		load_countries_data(state, list) {
			state.countries = list
		}
	},
	getters: {
		countries: state => state.countries
	}
};
