let pickedItem = $('#searchBar');

pickedItem.on('click' , e => {
    // searchedBar.pop()
    console.log(e.target)
    let reloadSearch = e.target.id
    
    let newSearch =  reloadSearch.split(' ');
    newSearch.shift()
    newSearch = newSearch.toString()
    
    cityNameTitle.text(`${newSearch}`)
    const reqURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + newSearch + "&appid=" + APIkey;
    if(newSearch = null){
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
})