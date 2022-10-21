const APIkeyF = '713127e45178ba0f5a1e551fd77a5b80';
const WEEKLY_WEATHER_DATA = [];

let canvas_1 = document.getElementById('card0');
let canvas_2 = document.getElementById('card1');
let canvas_3 = document.getElementById('card2');
let canvas_4 = document.getElementById('card3');
let canvas_5 = document.getElementById('card4');



function futureReq() {
    let city = 'toronto'

    const futurereqURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkeyF}`;
    fetch(futurereqURL) 
    .then((res) => {
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        class Card {
            constructor (date , temp , wind , humidity){
                this.date = date;
                this.temp = temp;
                this.wind = wind;
                this.humidity = humidity;
            }

        }
        
        let cardOne = new Card( data.list[8].dt_txt , data.list[8].main.temp , 
                                    data.list[8].wind.speed , data.list[8].main.humidity)

        let cardTwo = new Card(data.list[16].dt_txt, data.list[16].main.temp,
                                    data.list[16].wind.speed, data.list[16].main.humidity)
            
        let cardThree = new Card(data.list[24].dt_txt, data.list[24].main.temp, 
                                    data.list[3].wind.speed, data.list[3].main.humidity)

        let cardFour = new Card (data.list[24].dt_txt, data.list[24].main.temp,
                                    data.list[4].wind.speed, data.list[4].main.humidity)

        let cardFive = new Card (data.list[32].dt_txt, data.list[32].main.temp,
            data.list[5].wind.speed, data.list[32].main.humidity)

        cardRender(cardOne , cardTwo , cardThree, cardFour , cardFive)
        
    }) 
    // .catch(err => console.error(err));
}
futureReq()

function cardRender(cardOne , cardTwo , cardThree, cardFour , cardFive) {

    canvas_1.innerText = cardOne.date
    console.log(cardOne , cardTwo , cardThree, cardFour , cardFive);

}
// cardOjects()