let weather = {
    apiKey:"5cc6ec3c0106add301d6c59656968d4a",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
         city +
        "&units=metric&appid=" + 
         this.apiKey  
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
        
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon , description} = data.weather[0];
        const{ temp , humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather of " + name;
        document.querySelector(".icon").src =
        "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = " Description :" + description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".Humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".Wind").innerText = "Wind speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");

    },
    Search: function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.Search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event)
{
    if (event.key=="Enter") {
        weather.Search();
    }
});

