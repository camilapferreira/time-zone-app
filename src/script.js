// Create an HTML file with a select listing 3 different cities (Paris 🇫🇷,
// Tokyo 🇯🇵, Sydney 🇦🇺) and whenever a user selects one city, alert the current
// date and time of the selected city such as : "It is Saturday, October 8,
// 2023 2:51 PM in Europe/Paris"

function displayTime(response) {
  let timeZone = response.target.value;
  let date = moment().tz(timeZone).format("dddd, MMMM D YYYY, h:mm A");
  alert(`It is ${date} in ${timeZone}`);
}

let timezone = document.querySelector("#countries");
timezone.addEventListener("change", displayTime);
