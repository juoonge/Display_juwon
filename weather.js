const weather=document.querySelector(".js-weather");

const API_KEY="f4616005ac4f96b424e086301ff713d8";
const COORDS="coords";

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then((response)=>{
        return response.json()
    }).then((json)=>{
        const temperature=json.main.temp;
        const location=json.name;
        weather.innerText=`${temperature}˚ ${location}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoError(error){
    console.warn('ERROR(' + error.code + '): ' + err.message)
}
function handleGeosuccess(position){
    const crd=position.coords;
    const latitude=crd.latitude;
    const longitude=crd.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeosuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parseCoords=JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

loadCoords();
