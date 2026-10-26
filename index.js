/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const userInput = document.getElementById("user-input")
const lengthSentence = document.getElementById("length-conversions")
const volumeSentence = document.getElementById("volume-conversions")
const massSentence = document.getElementById("mass-conversions")


convertBtn.addEventListener("click", function(){
    let num = userInput.value
    metersFeet(num)
    litersGallons(num)
    kilogramPounds(num)
})

function metersFeet(num){
     const metersToFeet = num * 3.281
     const feetToMeters = num * 0.3048
     lengthSentence.textContent = `${num} meters = ${metersToFeet.toFixed(3)} feet | 
     ${num} feet = ${feetToMeters.toFixed(3)} meters`
     
}

function litersGallons(num){
    const litersToGallons = num * 0.264
    const gallonsToLiters = num * 3.78541 
    volumeSentence.textContent = `${num} liters = ${litersToGallons.toFixed(3)} gallons | ${num} gallons = 
    ${gallonsToLiters.toFixed(3)} liters`
}

function kilogramPounds(num){
    const kilosToPounds = num * 2.204
    const poundsToKilos = num * 0.453592
    
    massSentence.textContent = `${num} kilos = ${kilosToPounds.toFixed(3)} pounds | ${num} pounds = ${poundsToKilos.toFixed(3)} kilos`
}