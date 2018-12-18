let COINMARKETCAP_API = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';

let UPDATE_INTERVAL = 5 * 1000;

let app = new Vue({
	el: "#app",
	data: {
		coins: []
	},
	methods: {
		getCoins: function() {
			let self = this;
			axios.get(COINMARKETCAP_API)
				.then((resp) => {
					this.coins = resp.data;
				})
				.catch((err) => {
					console.log(err);
				})
		},

		getCoinImage: function(symbol) {
			return './static/coin_images/' + symbol.toLowerCase() + '.png';
		},

		getColor: (num) => {
			return num > 0 ? "color:green" : "color:red";
		}
	},
	created: function() {
		this.getCoins();
	}
});

setInterval(() => {
	app.getCoins();
}, UPDATE_INTERVAL);