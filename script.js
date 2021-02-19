const key = '5447ec87b6720e6526b7eb0de2f2e75a';
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit', (e) =>{
    e.preventDefault();
    details.innerHTML = '<h1>Loading...</h1>';
    // const location = e.target.value;
    const location = document.querySelector("input").value;
    weatherApp(location);
});

async function weatherApp(location){
   const data = await fetchAPI(location);
   generateHTMl(data);
}

// function fetchAPI(location){
//     const baseURL = `http://api.weatherstack.com/current?access_key=${key}&query = ${location}`;
//     fetch(baseURL)
//     .then(res => res.json)
//     .then(data => console.log(data))
// }

async function fetchAPI(location){
    const baseURL =`https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${key}&query=${location}`;
    // const baseURL =`http://api.weatherstack.com/current?access_key=5447ec87b6720e6526b7eb0de2f2e75a&query=${location}`;
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data);
    return data;
    
}

function generateHTMl(data){
    //here i use map cause weather_descriptions ( that as weather status ) is an array.
    // for each status we can say that item, that can  be multiple status thats why it is an array
    // so for each status i'll have the item only.
    // and we need to join them with a empty space ' '.
    const html = `
    <h1 class="temp">${data.current.temperature}°C</h1>
    <img src="${data.current.weather_icons.map(icon => icon).join(' ')}" alt="" srcset="">
    <h1 class="status">${data.current.weather_descriptions.map(item => item).join('')}</h1>
    <div class="more-info">
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Pressure: ${data.current.pressure}MB</p>
        <p>Wind Dir: ${data.current.wind_dir}</p>
        <p>Wind Speed: ${data.current.wind_speed}km/h</p>
    </div>
    <div class= "query">${data.request.query}</div>
    `;
    details.innerHTML = html;
}
