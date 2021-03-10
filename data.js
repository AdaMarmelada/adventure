const data = {
	title: 'Заголовок страницы',
	url: 'http://localhost',
	statistics: {
		YM_ID: 12345678,
		GA_ID: 'UA-00000000-00',
		RMBT_ID: 12345678,
		PAGE_LOAD_EVENT: false
	},
	filters: ["culture", "extreme", "people", "atmosphere"],
	countries: [
		{
			"id": "1",
			"title": "Cuba",
			"details": [],
			"slides": ["/img/cuba.png", "/img/cuba.png"],
			filters: ["culture", "people"]
		},
		{
			"id": "2",
			"title": "Russia",
			"details": [],
			"slides": ["/img/russia.png", "/img/russia.png"],
			filters: ["extreme", "people"]
		},
		{
			"id": "3",
			"title": "Latin America",
			"details": ["Honduras", "Columbia", "Panama", "Brazil", "Peru"],
			"slides": ["/img/latin.png"],
			filters: ["culture", "people", "atmosphere"]
		},
		{
			"id": "4",
			"title": "England",
			"details": [],
			"slides": ["/img/england.png", "/img/england.png"],
			filters: ["people"]
		},
		{
			"id": "5",
			"title": "Norway",
			"details": [],
			"slides": ["/img/norway.png", "/img/norway.png"],
			filters: ["atmosphere", "people"]
		},
		{
			"id": "6",
			"title": "Switzerland",
			"details": [],
			"slides": ["/img/switz.png", "/img/switz.png"]
		},
		{
			"id": "7",
			"title": "China",
			"details": [],
			"slides": ["/img/china.png", "/img/china.png"]
		},
		{
			"id": "8",
			"title": "Germany",
			"details": [],
			"slides": ["/img/germany.png", "/img/germany.png"]
		},
		{
			"id": "9",
			"title": "Japan",
			"details": [],
			"slides": ["/img/japan.png", "/img/japan.png"]
		},
		{
			"id": "10",
			"title": "Australia",
			"details": [],
			"slides": ["/img/australia.png", "/img/australia.png"]
		},
		{
			"id": "11",
			"title": "India",
			"details": [],
			"slides": ["/img/india.png", "/img/india.png"]
		},
		{
			"id": "12",
			"title": "Finland",
			"details": [],
			"slides": ["/img/finland.png", "/img/finland.png"]
		},
		{
			"id": "13",
			"title": "New Zealand",
			"details": [],
			"slides": ["/img/new-z.png", "/img/new-z.png"]
		}
	],
	share: {
		default_img: '/share.jpg',
		title: 'Заголовок Share',
		description: 'Описание Share'

	},

	allPrerenderRoutes: [ //without dynamic_shares
		'/',
	]

}


data.allPrerenderRoutes = []

export default data
