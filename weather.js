class Weather {
  constructor(city){
    this.apiKey ='c3b53fb8e9194dbafa58ee6fb43d6fe0';
    this.city = city;
  }
  // fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
    
    const responseData= await response.json();
    
    return responseData;
  }

  // change weather location

  changeLocation(city){
    this.city = city
  }
}