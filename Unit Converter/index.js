/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl =  document.getElementById("mass-el")



convertBtn.addEventListener("click", function() {
      //For the Length
      let feetsVal = inputEl.value * 3.281
       lengthEl.innerHTML = `
       <span class="length-js">Length (Meter/Feet) </span> <br>
       ${inputEl.value}meters = ${feetsVal.toFixed(3)}feet  | ${inputEl.value}feet = ${(((inputEl.value)**2) / feetsVal).toFixed(3)} meters`

      //For the Volume
      let gallonVal = inputEl.value * 0.264
      volumeEl.innerHTML = `
      <span class="volume-js">Volume (Liters/Gallons)</span> <br>
      ${inputEl.value}liters = ${gallonVal.toFixed(3)}gallons  | ${inputEl.value}gallons = ${(((inputEl.value)**2) / gallonVal).toFixed(3)} liters`

      //For the mass
      let massVal = inputEl.value * 2.204
      massEl.innerHTML = `
      <span class="mass-js">Mass (Kilograms/Pounds)</span> <br>
      ${inputEl.value}kilos = ${massVal.toFixed(3)}pounds  | ${inputEl.value}pounds = ${(((inputEl.value)**2) / massVal).toFixed(3)} kilos`

})
