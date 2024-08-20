const form = document.querySelector("#wish-form");
const list = document.querySelector("#wish-list");
const clearBtn = document.querySelector("#clear-btn");

// * массив для желаний
let wishArr = [];
let wishes = [];

// функция очищения элементов до того как делаем новый map измененного массива
function clearList() {
  while (list.firstChild) {
    list.firstChild.remove();
  }
}

// функция изменения статуса желания
function changeStatus(e) {
  e.target.classList.toggle("finished");
}

form.addEventListener("submit", e => {
  // чтобы страница на событии submit  не перезагружалась мы обращаемся к необязательному параметру e (или event) который передает в функцию браузер. в нем содержится информация о произошедшем событии + мы можем управлять поведением формы
  e.preventDefault();
  // забирая данные из разных input не перепутайте name этого поля ввода
  let wish = {
    wish: e.target.wish.value.toLowerCase(),
    desc: e.target.desc.value.toLowerCase()
  };

  //чистим значения формы
  e.target.wish.value = "";
  e.target.desc.value = "";

  if (wishes.includes(wish.wish)) {
    alert("You have already wished this! Change your wish ✨");
  } else {
    wishes.push(wish.wish);
    wishArr.push(wish);
    // чистим список от предыдущего вызова
    clearList();
    // создаем элемент для списка на основе массива
    wishArr.map(el => {
      const li = document.createElement("li");
      // добавляем событие для свойства onclick  - аналог слушателя событий
      li.onclick = changeStatus;
      li.textContent = `${el.wish}: ${el.desc}`;
      list.append(li);
    });
  }
});

clearBtn.addEventListener("click", () => {
  clearList();
  wishArr = [];
});
