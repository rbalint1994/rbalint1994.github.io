const form = document.querySelector("form");
const input = document.querySelector("#input")
const msg = document.querySelector("#msg")
const cityName = document.querySelector("#city__name")
const countryName = document.querySelector("#country__name")
const cityDegree = document.querySelector("#city__degree")
const weatherIcon = document.querySelector("#weather__icon")
const weatherCondition = document.querySelector("#weather__condition")
const resultsContainer = document.querySelector(".results__container")
const hint = document.querySelector("#hint")
const infoButton = document.querySelector("#hint__info")

 
form.addEventListener("submit", e => {
  resultsContainer.classList.remove("nodisplay");
  e.preventDefault();
  msg.textContent = ""
  const inputVal = input.value
  const apiKey = "2d5c09ce8bb8ae92169ad401b7cf04fe";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cityName.innerText = `${data.name}`
      countryName.innerText = `${data.sys.country}`
      cityDegree.innerText = `${Math.round(data.main.temp)} °C`
      weatherCondition.innerText = `${data.weather[0].description}`;
      weatherIcon.src = `${data.weather[0].icon.slice(0,2)}d.svg`;
      console.log(data.weather[0].icon)
      console.log(data.sys.country)
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
      resultsContainer.classList.add("nodisplay");
    });

    
});

infoButton.addEventListener("click", e =>{
  hint.classList.toggle("nodisplay")
})

