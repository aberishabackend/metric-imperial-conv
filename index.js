let inputElement = document.getElementById("input-el");
const resultBtn = document.getElementById("submit-btn");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

resultBtn.addEventListener("click", function () {
  baseValue = inputElement.value;

  lengthEl.textContent = `${baseValue} meters = ${
    baseValue * meterToFeet.toFixed(2)
  } feets`;
  volumeEl.textContent = `${baseValue} liters = ${
    baseValue * literToGallon.toFixed(2)
  } gallons`;
  massEl.textContent = `${baseValue} kilos = ${
    baseValue * kiloToPound.toFixed(2)
  } Pounds`;
});
