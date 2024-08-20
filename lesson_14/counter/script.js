// 1. объявили переменные и положили в них ссылку на интерактивные элементы
const btnMinus = document.querySelector("#counter-btn__minus");
const btnPlus = document.querySelector("#counter-btn__plus");
const counterValue = document.querySelector("#counter-value");

// 2. создали переменную счетчик
let counter = 0

// 3. отдельно от слушателя событий создали функции описывающие действие, которое произойдет при обработке события
const minusHandler = () => {
  counter--
  counterValue.textContent = counter
}

const plusHandler = () => {
  counter++
  counterValue.textContent = counter
}


// 4. передаем тип события и функцию с слушатель события
btnMinus.addEventListener('click', minusHandler)
btnPlus.addEventListener('click', plusHandler)
