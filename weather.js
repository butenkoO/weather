function weather() {
		let cityName = document.getElementById('cityName').value;
	
	    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType= 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if(status == 200) {
                callback(null, xhr.response)
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    }

    getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=7e5280342be84a00daebcc343505d62a', 
    function(err,weatherData){
          console.log(weatherData);
          let NameCity = weatherData.name;
          let wethIcon = weatherData.weather[0].icon;
          let weth = weatherData.weather[0].main;
          let ico = 'https://openweathermap.org/img/wn/'+wethIcon+'@2x.png';

          document.querySelector(".name").innerHTML = NameCity;
          document.getElementById("icon").src = ico;
          document.querySelector(".weth").innerHTML = weth;
    }); 

};
