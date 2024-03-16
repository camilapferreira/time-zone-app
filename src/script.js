function cityTime() {
  // Valencia
  let valencia = document.querySelector("#valencia");
  if (valencia) {
    let valenciaTime = valencia.querySelector(".time");
    let valenciaDate = valencia.querySelector(".date");
    valenciaTime.innerHTML = moment()
      .tz("Europe/Madrid")
      .format(`h:mm:ss [<small>]A[</small>]`);
    valenciaDate.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("MMMM Do YYYY");
  }

  //São Paulo
  let saopaulo = document.querySelector("#sao-paulo");
  if (saopaulo) {
    let saopauloTime = saopaulo.querySelector(".time");
    let saopauloDate = saopaulo.querySelector(".date");
    saopauloTime.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format(`h:mm:ss [<small>]A[</small>]`);
    saopauloDate.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format("MMMM Do YYYY");
  }

  //Tokyo
  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoTime = tokyo.querySelector(".time");
    let tokyoDate = tokyo.querySelector(".date");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format(`h:mm:ss [<small>]A[</small>]`);
    tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  }
}

//Update the cities list after selecting an option from the selector
function updateCity(event) {
  let citySelected = event.target.value;
  if (citySelected === "local") {
    citySelected = moment.tz.guess();
  }
  let city = citySelected.replace("_", " ").split("/")[1];
  let newList = document.querySelector("#cities-list");
  let date = moment().tz(citySelected).format("MMMM Do YYYY");
  let time = moment().tz(citySelected).format(`h:mm:ss [<small>]A[</small>]`);
  newList.innerHTML = `<div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
          </div> 
          </br>
          <a href="https://time-zone-app.netlify.app/" class="all-cities-link">All Cities</a>
        `;
}

cityTime();
setInterval(cityTime, 1000);

let citySelectorElement = document.querySelector("#city-select");
citySelectorElement.addEventListener("change", updateCity);
