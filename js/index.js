const quoteText = document.querySelector('#quote');
const quoteButton = document.querySelector('#new-quote');
const quoteAuthor = document.querySelector('#author');

function randomQuote() {
  fetch('https://api.quotable.io/random').then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    quoteText.innerHTML = data.content;
    quoteAuthor.innerHTML = data.author;
  });
}

quoteButton.addEventListener('click', randomQuote);
