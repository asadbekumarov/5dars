const elInput = document.querySelector("input");
const elBtn = document.querySelector("#btn");
const elResult = document.querySelector("#result");
const elResult2 = document.querySelector("#result2");
const elResult3 = document.querySelector("#result3");
const elResult4 = document.querySelector("#result4");



const personSpeed = 3.6;
const bycucleSpeed = 20.1;
const carSpeed = 70;
const palneSpeed = 800;

elBtn.addEventListener("click", function () {
  const space = elInput.value;

  const time = space / personSpeed;

  const hour = Math.floor(time);

  const allMinutes = (time - hour) * 60;

  const minutes = Math.floor(allMinutes);
  
  const seconds = Math.round((allMinutes - minutes) * 60 )

  elResult.textContent = `${hour} soat ${minutes} daqiqa ${seconds} soniya`;

  // bycucleSpeed/////////////////////

  const space2 = elInput.value;

  const time2 = space2 / bycucleSpeed;

  const hour2 = Math.floor(time2);

  const allMinutes2 = (time2 - hour2) * 60;

  const minutes2 = Math.floor(allMinutes2);

  const seconds2 = Math.round((allMinutes - minutes) * 60 )

  elResult2.textContent = `${hour2} soat ${minutes2} daqiqa ${seconds} soniya`;

// carSpeed/////////////////////////

const space3 = elInput.value;

const time3 = space3 / carSpeed;

const hour3 = Math.floor(time3);

const allMinutes3 = (time3 - hour3) * 60;

const minutes3 = Math.floor(allMinutes3);

const seconds3 = Math.round((allMinutes - minutes) * 60 )

elResult3.textContent = `${hour3} soat ${minutes3} daqiqa ${seconds} soniya`;

// palneSpeed///////////////////////

const space4 = elInput.value;

const time4 = space4 / palneSpeed;

const hour4 = Math.floor(time4);

const allMinutes4 = (time4 - hour4) * 60;

const minutes4 = Math.floor(allMinutes4);

const seconds4 = Math.round((allMinutes - minutes) * 60 )

elResult4.textContent = `${hour4} soat ${minutes4} daqiqa ${seconds} soniya`;
});


let modemoon = document.getElementById("light-dark");

modemoon.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
