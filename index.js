const options = document.querySelectorAll("li.btn");
const submit_btn = document.querySelector("button[type='submit'");
const selection_result = document.querySelector(".selection-result");
const cards = document.querySelectorAll(".card");
let selected = document.querySelector("li.btn.selected").textContent;
console.log(selected);

for (const option of options) {
  option.addEventListener("click", () => {
    options.forEach((option) => option.classList.remove("selected"));
    option.classList.add("selected");
    selected = option.textContent;
  });
}

submit_btn.addEventListener("click", () => {
  selection_result.textContent = `You selected ${selected} out of 5`;
  cards[0].style.display = "none";
  cards[1].style.display = "block";
});
