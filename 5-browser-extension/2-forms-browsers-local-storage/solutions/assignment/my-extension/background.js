const numItems = 10;
const refreshInterval = 10;

const quoteUrl = `https://quote-garden.herokuapp.com/api/v3/quotes/random?count=${numItems}`;
const imgUrl = 'https://picsum.photos';

function setQuotes() {
    fetch(quoteUrl)
        .then((response) => {
            if (!response.ok) {
                console.error('failed to fetch quotes.');
                return null;
            }
            return response.json();
        })
        .then((data) => {
            const quoteCollection = [];
            for (const quote of data.data) {
                const quoteObj = {};
                quoteObj['quoteText'] = quote.quoteText;
                quoteObj['quoteAuthor'] = quote.quoteAuthor;
                quoteCollection.push(quoteObj);
            }

            chrome.storage.local.set({ 'quoteKey': quoteCollection }, () => {
                console.log('quotes successfully updated.');
            });
        });
}

async function setBackgroundImages() {
    const screenInfo = await getScreenDimensions();
    const imgCollection = [];
    for (let i = 0; i < numItems; i++) {
        await fetch(imgUrl + `/${screenInfo.width}/${screenInfo.height}?grayscale&blur`)
            .then((response) => {
                if (!response.ok) {
                    console.warn(`failed to retrieve img ${i}.`);
                } else {
                    imgCollection.push(response.url);
                }
            });
    }
    chrome.storage.local.set({ 'imgKey': imgCollection }, () => {
        console.log('images successfully updated.');
    });
}

function setTimestamp() {
    let currentTime = Date.now();
    chrome.storage.local.set({ 'timestamp': currentTime }, () => {
        console.log('timestamp successfully updated.');
    });
}

// returns an object containing the width + height of the largest screen available
async function getScreenDimensions() {
    const screenInfo = {};
    let maxWidth = 1920;
    let maxHeight = 1080;
    chrome.system.display.getInfo()
        .then((screens) => {
            maxWidth = screens[0].bounds.width;
            maxHeight = screens[0].bounds.height;
            for (let i = 1; i < screens.length; i++) {
                if (screens[i].bounds.width > maxWidth) {
                    maxWidth = screens[i].bounds.width;
                }
                if (screens[i].bounds.height > maxHeight) {
                    maxHeight = screens[i].bounds.height;
                }
            }
            screenInfo.width = maxWidth;
            screenInfo.height = maxHeight;
        });

    return screenInfo;
}

chrome.runtime.onInstalled.addListener(() => {
    setQuotes();
    setBackgroundImages();
    setTimestamp();
});

// TODO check timestamp on each launch -> if timestamp is older than time interval -> fetch new imgs + quotes + update timestamp
// TODO add extension-icon + find a cool extension name
// TODO check screenSize on each tab launch
