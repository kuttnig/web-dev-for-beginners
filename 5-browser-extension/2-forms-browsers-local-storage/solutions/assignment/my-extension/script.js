const imageElement = document.getElementById('background-img');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

chrome.storage.local.get(['quoteKey'], (result) => {
    const quotes = result.quoteKey;
    const index = Math.floor(quotes.length * Math.random());
    quoteElement.innerHTML = quotes[index].quoteText;
    authorElement.innerHTML = quotes[index].quoteAuthor;
});

chrome.storage.local.get(['imgKey'], (result) => {
    const images = result.imgKey;
    const index = Math.floor(images.length * Math.random());
    imageElement.setAttribute('src', images[index]);
});
