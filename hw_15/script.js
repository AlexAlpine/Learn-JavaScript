const form = document.getElementById("form-gender");
const container = document.getElementById("container-gender");

form.addEventListener("submit", e => {
  // выключаем поведение по умолчанию
  e.preventDefault();
  const name = e.target.gender.value;
  // чистим за собой шщтзге
  e.target.gender.value = "";
  console.log(name);
  // теперь нужно сделать запрос за данными
  fetch(`https://api.genderize.io/?name=${name}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // используем шаблонную строкцу
      const text = `Гендер ${data.name} is ${data.gender}. Probability ${data.probability * 100}%`;
      container.textContent = text;
    });
});
