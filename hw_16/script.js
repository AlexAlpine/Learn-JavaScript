const catImg = document.querySelector("#cat-img");
const catFactParagraph = document.querySelector("#cat-fact");
const getCatBtn = document.querySelector("#get-cat-btn");

// асинхронная стрелочная функция
const getCatFact = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  catFactParagraph.textContent = data.fact;
};

const getCatImg = async () => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
  );
  const data = await res.json();
  catImg.src = data[0].url;
};

getCatBtn.addEventListener("click", () => {
  getCatFact();
  getCatImg();
});

getCatFact();
getCatImg();
