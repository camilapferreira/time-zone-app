function cityTime() {
  // Valencia
  let valencia = document.querySelector("#valencia");
  let valenciaTime = valencia.querySelector(".time");
  let valenciaDate = valencia.querySelector(".date");
  valenciaTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format(`h:mm:ss [<small>]A[</small>]`);
  valenciaDate.innerHTML = moment().tz("Europe/Madrid").format("MMMM Do YYYY");

  //São Paulo
  let saopaulo = document.querySelector("#sao-paulo");
  let saopauloTime = saopaulo.querySelector(".time");
  let saopauloDate = saopaulo.querySelector(".date");
  saopauloTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format(`h:mm:ss [<small>]A[</small>]`);
  saopauloDate.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("MMMM Do YYYY");

  //Tokyo
  let tokyo = document.querySelector("#tokyo");
  let tokyoTime = tokyo.querySelector(".time");
  let tokyoDate = tokyo.querySelector(".date");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format(`h:mm:ss [<small>]A[</small>]`);
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
}

cityTime();
setInterval(cityTime, 1000);
