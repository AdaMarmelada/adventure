<template lang="pug">
	section
		.container
			.filters.d-flex
				a(href="#" v-on:click.prevent="setFilteredValue" data-value="").active все страны
				a(href="#" v-on:click.prevent="setFilteredValue" data-value="culture") культура
				a(href="#" v-on:click.prevent="setFilteredValue" data-value="extreme") экстрим
				a(href="#" v-on:click.prevent="setFilteredValue" data-value="atmosphere") атмосфера
				a(href="#" v-on:click.prevent="setFilteredValue" data-value="people") люди
			.card-list
				.card-list_card(v-for="country in filteredCountries" v-bind:key="country.id" v-bind:class="[{'card-list_card__large': country.details.length > 0 , 'card-list_card__standard': country.details.length == 0}]")
					hooper(pagination="no")
						slide(v-for="(slide, indx) in country.slides" v-bind:key="indx" v-bind:index="indx")
							img(v-bind:src = "slide")
							.country-details
								h1.card_title {{country.title}}
								ol(v-if = "country.details.length > 0")
									li(v-for="detail in country.details")
										h3 {{detail}}
						hooper-navigation(v-if="country.slides.length > 1" slot="hooper-addons")

</template>
<script>
	import data from "../../data";
	import store from "../store/index";
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';

export default {
    data() {
        return {
            filterValue: ""
				}
		},
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
		computed:{
			filteredCountries(){
				return store.state.common.countries
						.filter(country => this.filterValue.length === 0 || !!country.filters && country.filters.includes(this.filterValue));
			}
		},
    methods: {
        setFilteredValue(event){
            event.target.parentElement.querySelectorAll('a').forEach(item => item.classList.remove('active'));
            event.target.classList.add('active');

            this.filterValue = event.target.getAttribute("data-value");
				}

		},
		mounted() {
        store.dispatch('common/load', data.countries);
		}
}
</script>
