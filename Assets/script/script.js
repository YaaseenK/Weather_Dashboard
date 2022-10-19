const APIkey = '713127e45178ba0f5a1e551fd77a5b80';

var city = 'austin';

var reqURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

    fetch(reqURL) 
    .then((res) => {
        return res.json();
    }) 
    .then((res) => {
        console.log(res)
    });
