const key = '5447ec87b6720e6526b7eb0de2f2e75a';
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit', (e) =>{
    e.preventDefault();
    details.innerHTML = '<h1>Loading...</h1>';
    const location = e.target.value;
    weatherApp(location);
});

function weatherApp(location){
    fetchAPI(location);
}

// function fetchAPI(location){
//     const baseURL = `http://api.weatherstack.com/current?access_key=${key}&query = ${location}`;
//     fetch(baseURL)
//     .then(res => res.json)
//     .then(data => console.log(data))
// }

async function fetchAPI(location){
    // const baseURL =`http://api.weatherstack.com/current?access_key=${key}&query=${location}`;
    const baseURL =`http://api.weatherstack.com/current?access_key='5447ec87b6720e6526b7eb0de2f2e75a&query'=${location}`;
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data);
}
