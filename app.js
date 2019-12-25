

// initilize weather, ui object
const storage = new Storage;
//get stored location data
const weatherLocation = storage.getLocationData()
const weather = new Weather(weatherLocation.city);
const ui = new UI;


// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


// get Weather function
function getWeather(){
  weather.getWeather()
  .then(result=>ui.paint(result))
  .catch(err=>console.log(err))
}

// event listeer for change location
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  
  // set the location in local storage
  storage.setLocationData(city)

  //get and display weather
  getWeather();
  $('#locModal').modal('hide');
})

