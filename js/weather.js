const weather = document.querySelector("#weather span:first-child");
const city= document.querySelector("#weather span:last-child");
const API_KEY ="de37c061619340c3c697ad65b13c4e72";

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("You live it", lat, lon);
	const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} /. ${data.main.temp}`;
	});
}
function onGeoError(){
	alert("Can't find you. No weather for you.");
	}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);