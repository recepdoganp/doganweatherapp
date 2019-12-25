class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  // define paint method
  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp.toFixed(0)}° Celcius`;
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} 
    %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(0)}° Celcius`;
    this.pressure.textContent = `Atmospheric Pressure: ${(weather.main.pressure/1013.2501).toFixed(2)} atm`;
    this.wind.textContent = `Wind Speed: ${(weather.wind.speed*3600/1000).toFixed(0)} km/h `;
  }
}