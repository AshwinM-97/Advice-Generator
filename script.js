const id = document.querySelector(".idNum");
const advice = document.querySelector(".adviceText");
const btn = document.querySelector(".dice");

window.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    });
});

btn.addEventListener("click", () => {
  window.location.reload();
});
