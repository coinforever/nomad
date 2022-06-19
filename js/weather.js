const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "e71726661f60fa749ea5cac7017e7d1d";

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `날씨 : ${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    alert("위치정보가 없어 날씨가 출력되지 않습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);