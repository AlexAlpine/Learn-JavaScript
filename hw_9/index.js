const btn = document.getElementById("magic-btn");
// создаем новую переменную и кладем в нее копию найденной кнопки
// * эта кнопка так и ждет что мы ее добавим на страницу 🥺
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя"
clonedBtn.className = 'second-btn'
clonedBtn.style.backgroundColor = '#a78b71'
clonedBtn.style.color = '#fff'

// ! добавили слушатель события на кнопку
btn.addEventListener("click", () => {
  // добавляем родителю (в данном случае body) элемент через метод appendChild()
  document.body.appendChild(clonedBtn)
});



clonedBtn.addEventListener('click', () => {
  clonedBtn.style.backgroundColor = '#9c4a1a'
  clonedBtn.style.color = 'black'
})

