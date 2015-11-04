function Request(method, url, data = {}) {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest()
		request.open(method, url, true)
		request.onreadystatechange = () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					resolve("Good")
				} else {
					reject("Bad")
				}
			}
		}
		request.send()
	})
}

export default Request