const APIkeyF = '713127e45178ba0f5a1e551fd77a5b80';
const WEEKLY_WEATHER_DATA = [];

let canvas_1 = $('#card0');
let canvas_2 = $('#card1');
let canvas_3 = $('#card2');
let canvas_4 = $('#card3');
let canvas_5 = $('#card4');



function futureReq() {
    let city = localStorage.getItem('recentSearch');
    
    const futurereqURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkeyF}`;
    fetch(futurereqURL) 
    .then((res) => {
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        class Card {
            constructor (date , temp , wind , humidity){
                this.date = date.slice(0 , 11);
                this.temp = `Temp: ${Math.floor(temp - 273.15)} °C`;
                this.wind = `Wind: ${wind} / Mph`;
                this.humidity = `Humidity: ${humidity} %`;
            }

        }
        
        let cardOne = new Card( data.list[8].dt_txt , data.list[8].main.temp , 
                                    data.list[8].wind.speed , data.list[8].main.humidity)

        let cardTwo = new Card(data.list[16].dt_txt, data.list[16].main.temp,
                                    data.list[16].wind.speed, data.list[16].main.humidity)
            
        let cardThree = new Card(data.list[24].dt_txt, data.list[24].main.temp, 
                                    data.list[24].wind.speed, data.list[24].main.humidity)

        let cardFour = new Card (data.list[32].dt_txt, data.list[32].main.temp,
                                    data.list[32].wind.speed, data.list[32].main.humidity)

        let cardFive = new Card (data.list[39].dt_txt, data.list[39].main.temp,
                                    data.list[39].wind.speed, data.list[39].main.humidity)

        cardRender(cardOne , cardTwo , cardThree, cardFour , cardFive)
        
    }) 
    // .catch(err => console.error(err));
}


function cardRender(cardOne , cardTwo , cardThree, cardFour , cardFive) {
    canvas_1.empty()
    canvas_2.empty()
    canvas_3.empty()
    canvas_4.empty()
    canvas_5.empty()
    // card 1
    $('<h2>' , {
        id: "date1",
        text: cardOne.date
    }).appendTo(canvas_1);
    $('<p>' , {
        id: "temp1",
        text: cardOne.temp
    }).appendTo(canvas_1);
    $('<p>' , {
        id: "wind1",
        text: cardOne.wind
    }).appendTo(canvas_1);
    $('<p>' , {
        id: "humidity1",
        text: cardOne.humidity
    }).appendTo(canvas_1);

    // card 2
    $('<h2>' , {
        id: "date2",
        text: cardTwo.date
    }).appendTo(canvas_2);
    $('<p>' , {
        id: "temp2",
        text: cardTwo.temp
    }).appendTo(canvas_2);
    $('<p>' , {
        id: "wind2",
        text: cardTwo.wind
    }).appendTo(canvas_2);
    $('<p>' , {
        id: "humidity2",
        text: cardTwo.humidity
    }).appendTo(canvas_2);
    
    // card 3
    $('<h2>' , {
        id: "date3",
        text: cardThree.date
    }).appendTo(canvas_3);
    $('<p>' , {
        id: "temp3",
        text: cardThree.temp
    }).appendTo(canvas_3);
    $('<p>' , {
        id: "wind3",
        text: cardThree.wind
    }).appendTo(canvas_3);
    $('<p>' , {
        id: "humidity3",
        text: cardThree.humidity
    }).appendTo(canvas_3);

    // card 4
    $('<h2>' , {
        id: "date4",
        text: cardFour.date
    }).appendTo(canvas_4);
    $('<p>' , {
        id: "temp4",
        text: cardFour.temp
    }).appendTo(canvas_4);
    $('<p>' , {
        id: "wind4",
        text: cardFour.wind
    }).appendTo(canvas_4);
    $('<p>' , {
        id: "humidity4",
        text: cardFour.humidity
    }).appendTo(canvas_4);

    // card 5
    $('<h2>' , {
        id: "date5",
        text: cardFive.date
    }).appendTo(canvas_5);
    $('<p>' , {
        id: "temp5",
        text: cardFive.temp
    }).appendTo(canvas_5);
    $('<p>' , {
        id: "wind5",
        text: cardFive.wind
    }).appendTo(canvas_5);
    $('<p>' , {
        id: "humidity5",
        text: cardFive.humidity
    }).appendTo(canvas_5);



    // canvas_1.innerText = cardOne.date
    console.log(cardOne , cardTwo , cardThree, cardFour , cardFive);

}
// cardOjects()