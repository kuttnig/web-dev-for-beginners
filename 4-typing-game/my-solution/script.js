const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
let words = [];
let wordIndex = 0;
let quoteIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

const startButton = document.getElementById('start');
const dialogBox = document.getElementById('dialog-box');
const scoreBoard = document.getElementById('scores');

startButton.addEventListener('click', () => {
    typedValueElement.removeAttribute('disabled');
    typedValueElement.addEventListener('input', updateText);

    quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    const spanWords = words.map(word => `<span>${word} </span>`);
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';

    typedValueElement.value = '';
    typedValueElement.focus();

    startTime = new Date().getTime();
});


function updateText() {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    // quote is finished
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTimeSeconds = (new Date().getTime() - startTime) / 1000;
        const message = `Congratulations! You finished in ${elapsedTimeSeconds} seconds.`;
        messageElement.innerText = message;

        quoteElement.childNodes[wordIndex].className = '';

        typedValueElement.value = '';
        typedValueElement.setAttribute('disabled', '');
        typedValueElement.removeEventListener('input', updateText);

        let highscores = updateHighScores(elapsedTimeSeconds);
        console.log(highscores);
        let listElements = scoreBoard.children;
        console.log(listElements);
        for (let i = 0; i < highscores.length; i++) {
            if (highscores[i] === null) {
                listElements[i].innerHTML = '-';
            } else {
                listElements[i].innerHTML = highscores[i].toString();
            }
        }
        console.log(listElements);

        dialogBox.showModal();
        // word is finished and quote is not finished
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';

        quoteElement.childNodes[wordIndex].className = '';
        wordIndex++;
        quoteElement.childNodes[wordIndex].className = 'highlight';
        //
    } else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = '';
    } else {
        typedValueElement.className = 'error';
    }
}

function updateHighScores(elapsedTimeSeconds) {
    const currentHighScores = window.localStorage.getItem(quoteIndex.toString());
    let highScores = [];
    if (currentHighScores === null) {
        highScores = [elapsedTimeSeconds, null, null];
    } else {
        highScores = JSON.parse(currentHighScores);
        highScores.push(elapsedTimeSeconds);
        for (let i = (highScores.length - 1); i > 0 && (highScores[i - 1] === null || highScores[i] < highScores[i - 1]); i--) {
            let tmp = highScores[i];
            highScores[i] = highScores[i - 1];
            highScores[i - 1] = tmp;
        }
        highScores.pop();
    }
    window.localStorage.setItem(quoteIndex, JSON.stringify(highScores));
    return highScores;
}
