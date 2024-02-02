const inputBox =document.querySelector('.input-box');
const searchBtn =document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather_img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('.humidity');
const wind_speed=document.getElementById('.wind-speed');

 async function checkWeather(city){
    const api_key ="bce970712cdc9941dcef3562c832fc25";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        console.log("error");
        return;
    }

    temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)} °C`;

    description.innerHTML = `${weather_data.weather[0].description}`;
    console.log(weather_data);

    humidity.innerHTML =`${weather_data.main.humidity}%`;

    wind_speed.innerHTML =`${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main){
        case'Clouds':
        weather_img.src="Screenshot 2024-02-02 000308.png";
        break;
        case 'Clear':
            weather_img.src ="Screenshot 2024-02-02 000017.png";
            break;
        case 'Rain':
            weather_img.src="Screenshot 2024-02-01 235914.png";
            break;
        case 'Mist':
             weather_img.src="Screenshot 2024-02-03 002155.png";
             break;
        case 'Snowfall':
             weather_img.src="Screenshot 2024-02-03 002358";
             break;
    }

    console.log(weather_data)

}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

