function changeAdv(event){
    const img = document.querySelector('#img-low');
    img.src = 'Img/adv2.jpg';
    const title = document.querySelector('#txt-low-bold');
    title.textContent = 'Prenota il soggiorno dei tuoi sogni con l’app Hilton Honors';
    const txt = document.querySelector('#txt-low-thin');
    txt.textContent = 'Scopri i modi in cui l’app Hilton Honors migliorerà il tuo soggiorno. Prenota hotel, esplora destinazioni, guadagna premi e molto altro ancora.';
    const button = document.querySelector('#button-low');
    button.textContent = 'Scarica gratuitamente'
}
function returnAdv(event){
    const img = document.querySelector('#img-low');
    img.src = 'Img/img2.jpg';
    const title = document.querySelector('#txt-low-bold');
    title.textContent = 'Migliora il tuo modo di soggiornare (gratuitamente!)';
    const txt = document.querySelector('#txt-low-thin');
    txt.textContent = 'I soci Hilton Honors ricevono più valore dai soggiorni con tariffe esclusive per i soci, garanzia del prezzo più basso e vantaggi come il WiFi gratuito. Inoltre, ricevi punti per ogni soggiorno che puoi utilizzare per notti gratuite in oltre 7.000 hotel in tutto il mondo o riscattali con i nostri partner esclusivi.';
    const button = document.querySelector('#button-low');
    button.textContent = 'Iscriviti gratuitamente'
}
function returnToTop(event){
    document.body.scrollIntoView({
        behavior: 'smooth'
    });
}
function languageMenu(event){
    var menu = document.querySelector('#menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        const img2 = document.querySelector('#icon-sel');
        img2.src = 'Img/Espandi.png';
        img2.classList.remove('adjust');
    } else {
        menu.style.display = 'flex';
        const img1 = document.querySelector('#icon-sel');
        img1.src = 'Img/Comprimi2.png';
        img1.classList.add('adjust');   
    }
}
function consoleInfo(event){
    console.log(info.dataset.info);
    info.removeEventListener('click', consoleInfo);
}
function addElement(event){
    const container = event.currentTarget;
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('Per ulteriori informazioni contattaci');
    container.appendChild(newDiv);
    newDiv.appendChild(newText); 
    container.removeEventListener('click', addElement);
}
function weatherSearchView(event){
    var box1 = document.querySelector('.meteo-search');
    if(box1.style.display === 'flex'){
        box1.style.display = 'none';
    } else {
        box1.style.display = 'flex';
    }
}
function weatherSearch(event){
    event.preventDefault();
    const city_input = document.querySelector('#city');
    const city_value = encodeURIComponent(city_input.value);
    console.log('Eseguo Ricerca per: ' + city_value);
    url = 'http://api.weatherapi.com/v1/current.json?key=4a40a9d2d4134277b5675429242204&q=' + city_value;
    console.log('URL: ' + url);
    fetch(url).then(onResponse).then(onJson);
}
function onResponse(response){
    return response.json();
}
function onJson(json){
    const info = document.querySelector('#weather-info')
    info.innerHTML = '';
    const sezione = document.createElement('div');
    const name = json.location.name;
    const cityName = document.createElement('div');
    cityName.textContent = 'Città: ' + name;
    const region = json.location.region;
    const regionName = document.createElement('div');
    regionName.textContent = 'Regione: ' + region;
    const country = json.location.country;
    const countryName = document.createElement('div');
    countryName.textContent = 'Paese: ' + country;
    const time = json.current.last_updated;
    const showTime = document.createElement('div');
    showTime.textContent = 'Ultimo Aggiornamento: ' + time + ' locali';
    const temp = json.current.temp_c;
    const tempValue = document.createElement('div');
    tempValue.textContent = 'Temperatura: ' + temp + '°C';
    const condition = json.current.condition.text;
    const conditionText = document.createElement('div');
    conditionText.textContent = 'Condizione: ' + condition;
    const icon = json.current.condition.icon;
    const conditionIcon = document.createElement('img');
    conditionIcon.src = 'http:' + icon;
    cityName.classList.add('info-meteo');
    regionName.classList.add('info-meteo');
    countryName.classList.add('info-meteo');
    showTime.classList.add('info-meteo');
    tempValue.classList.add('info-meteo');
    conditionText.classList.add('info-meteo');
    conditionIcon.classList.add('meteo-icon');
    sezione.appendChild(cityName);
    sezione.appendChild(regionName);
    sezione.appendChild(countryName);
    sezione.appendChild(showTime);
    sezione.appendChild(tempValue);
    sezione.appendChild(conditionText);
    sezione.appendChild(conditionIcon);
    info.appendChild(sezione);
    document.querySelector('#city').value='';
}
function imgSearchView(event){
    var box2 = document.querySelector('.img-search');
    if(box2.style.display === 'flex'){
        box2.style.display = 'none';
    } else {
        box2.style.display = 'flex';
    }
}
function flightSearchView(event){
    var box4 = document.querySelector('.fly-search');
    if(box4.style.display === 'flex'){
        box4.style.display = 'none';
    } else {
        box4.style.display = 'flex';
    }
}


const button = document.querySelector('#txt-mid-low2');
button.addEventListener('click', changeAdv);
const button2 = document.querySelector('.txt-mid-low');
button2.addEventListener('click', returnAdv);
const buttonToTop = document.querySelector('.box-1');
buttonToTop.addEventListener('click', returnToTop);
const languageButton = document.querySelector('.lingua');
languageButton.addEventListener('click', languageMenu);
const languageIcon = document.querySelector('#icon-sel');
languageIcon.addEventListener('click', languageMenu);
const info = document.querySelector('.number');
info.addEventListener('click', consoleInfo);
const dynamicElement = document.querySelector('.number');
dynamicElement.addEventListener('click', addElement);
const weatherBox = document.querySelector('.meteo');
weatherBox.addEventListener('click', weatherSearchView);
const formMeteo = document.querySelector('#form-meteo');
formMeteo.addEventListener('submit', weatherSearch);
const imgBox = document.querySelector('.search-img');
imgBox.addEventListener('click', imgSearchView);
const formImmagini = document.querySelector('#form-immagini');
formImmagini.addEventListener ('submit', imgSearch);
const flightBox = document.querySelector('.voli-img');
flightBox.addEventListener('click', flightSearchView);
const formVoli = document.querySelector('#form-voli');
formVoli.addEventListener ('submit', flightSearch);



const client_id = 'KV08iMdAtWLf9gV76qdADMJaiD2ii0gk';
const client_secret = 'VZAYuny7Ais1Rsx9';
let token;
fetch('https://api.shutterstock.com/v2/oauth/access_token',
{
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded' 
    }
}
).then(onTokenResponse).then(onTokenJson);


function onTokenJson(json)
{
  token = json;
}

function onTokenResponse(response)
{
  return response.json();
}


function imgSearch(event){
    event.preventDefault();
    const img_name = document.querySelector('#search1');
    const img_value = encodeURIComponent(img_name.value);
    console.log('Ricerca di ' + img_value + ' in corso...');
    url = 'https://api.shutterstock.com/v2/images/search?query=' + img_value +'&sort=popular&language=en';
    console.log(url);
    fetch(url,
        {
          headers:
          {
            'Accept': 'application/json',
            'Host': 'localhost', 
            'Authorization': token.token_type + ' ' + token.access_token
          }
        }
        ).then(onResponse2).then(onJson2);
    }

function onResponse2(response){
    return response.json();
}
function onJson2(json){
    const img_div = document.querySelector('#img-display');
    img_div.innerHTML = '';
    const results = json.data;
    let num_results = results.length;
    if(num_results > 5)
      num_results = 5;
    for(let i=0; i<num_results; i++)
    {
        const img_data = results[i]
        const description = img_data.description;
        const img_search = document.createElement('div');
        img_search.classList.add('img_search');
        const img_desc = document.createElement('div');
        img_desc.textContent = '-  ' + description;
        img_desc.classList.add('img_desc');
        const img_photojson = img_data.assets.mosaic.url;
        const img_photo = document.createElement('img');
        img_photo.src = img_photojson;
        img_photo.classList.add('img_photo');
        img_search.appendChild(img_photo);
        img_search.appendChild(img_desc);
        img_div.appendChild(img_search);
    }
    document.querySelector('#search1').value='';
}



const client_id2 = 'NM0iPjGIbPiEibIVfhH2mX0koAOwRLoK';
const client_secret2 = 'GMZpw8qZpA35Or6U';
let token2;
fetch('https://test.api.amadeus.com/v1/security/oauth2/token',
{
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + client_id2 + '&client_secret=' + client_secret2,
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded' 
    }
}
).then(onTokenResponse2).then(onTokenJson2);


function onTokenJson2(json)
{
  token2 = json;
}

function onTokenResponse2(response)
{
  return response.json();
}


function flightSearch(event){
    event.preventDefault();
    const origin_name = document.querySelector('#origin');
    const origin_value = encodeURIComponent(origin_name.value);
    const destination_name = document.querySelector('#destination');
    const destination_value = encodeURIComponent(destination_name.value);
    const departureDate = document.querySelector('#departure-date');
    const departureDate_value = encodeURIComponent(departureDate.value);
    console.log('Ricerca del volo in corso...');
    const url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=' + origin_value + '&destinationLocationCode=' + destination_value + '&departureDate=' + departureDate_value + '&adults=1&max=3';
    fetch(url,
        {
          headers:
          {
            'Authorization': token2.token_type + ' ' + token2.access_token
          }
        }
        ).then(onResponse3).then(onJson3);
    }

function onResponse3(response){
    return response.json();
}
function onJson3(json){
    const flight_info = document.querySelector('#voli-display');
    flight_info.innerHTML = '';
    const results2 = json.data;
    let num_results2 = results2.length;
    for(let i=0; i<num_results2; i++){
        const fly_data = results2[i];
        const fly_box = document.createElement('div');
        const price_currency = fly_data.price.currency;
        const price = fly_data.price.total;
        const prezzo = document.createElement('div');
        prezzo.textContent = 'Prezzo: ' + price + ' ' + price_currency;
        const seats = fly_data.numberOfBookableSeats;
        const seats_number = document.createElement('div');
        seats_number.textContent = 'Numero posti disponibili: ' + seats;
        const numero = document.createElement('div');
        numero.textContent = '- Volo numero: ' + i;
        const source = fly_data.source;
        const fonte = document.createElement('div');
        fonte.textContent = 'Fonte: ' + source;
        numero.classList.add('txt-num-voli');
        seats_number.classList.add('voli-text');
        prezzo.classList.add('voli-text');
        fonte.classList.add('voli-text');
        fly_box.appendChild(numero);
        fly_box.appendChild(seats_number);
        fly_box.appendChild(prezzo);
        fly_box.appendChild(fonte);
        flight_info.appendChild(fly_box);
    }
    document.querySelector('#origin').value='';
    document.querySelector('#destination').value='';
    document.querySelector('#departure-date').value='';
}