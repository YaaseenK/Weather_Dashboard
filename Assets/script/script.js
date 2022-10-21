const APIkey = '713127e45178ba0f5a1e551fd77a5b80';


const temp = $('#temp');
const wind = $('#wind');
const humidity = $('#humidity');
const cityNameTitle = $('#cityTitle')

$('#search').on('click' , () =>{
    let city = $('#location').val();
    cityNameTitle.text(`${city}`);    
    localStorage.setItem('recentSearch', city);
    const reqURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    if(city = null){
        console.log('err');
    }
        fetch(reqURL) 
        .then((res) => {
            return res.json();
        })
        .then((data)=>{
            console.log(data)
            let weatherData = {
                    temp: data.main.temp,
                    wind: data.wind.speed,
                    humidity: data.main.humidity
                }
                render(weatherData)
        })
        searchedList();
        // .catch(err => console.error(err));
})

    function render(weatherData){
        
        let weather = weatherData;
        let cityTemp = Math.round(weather.temp - 273.15);
        let cityWind = weather.wind;
        let cityHumidity = weather.humidity;
        
        temp.html(`Temp: ${cityTemp}°C`);
        wind.text(`Wind: ${cityWind} / Mph`);
        humidity.text(`Humidity: ${cityHumidity} %`);
        
        doubles()
    }
