let counter = 23
setInterval(() => {
		if(counter>0){
			counter--
		}
    document.getElementById('counterElement').style.setProperty('--value', counter)
}, 1000)