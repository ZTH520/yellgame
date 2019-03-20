import axios from 'axios'

function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, { params: params })
		.then(res => {
			resolve(res.data)
		}, err => {
			reject(err)
		})
		.catch(error => {
			reject(error)
		})
	})
}

function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.post(url, data)
		.then(res => {
			resolve(res.data)
		}, err => {
			reject(err)
		})
		.catch(error => {
			reject(error)
		})
	})
}

export default {
	config: axios,
	getBanner() {
		return get("/home/banner");
	},
	getIndexList() {
		return get('/home/indexlist');
	},
	getList(params) {
		return get('/home/list', params)
	},
	getDetail(params) {
		return get('/home/detail', params)
	},
	getRecommond(params) {
		return get('/home/recommond', params)
	}
}