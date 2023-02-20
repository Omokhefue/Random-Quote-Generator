const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");
const button = document.querySelector("button");
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let quote = data[Math.floor(Math.random() * data.length)];
      quoteText.textContent = quote.text;
      quoteAuthor.textContent = quote.author;
    })
    .catch((err) => {
      console.log(err);
    });
}
button.addEventListener("click", () => {
  getQuote();
});
