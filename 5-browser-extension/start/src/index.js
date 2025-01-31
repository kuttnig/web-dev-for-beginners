import axios from '../node_modules/axios';

// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');


/*
equivalent long-form notation:
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    ...
}
clearBtn.addEventListener('click', reset);
function reset(e) {
    ...
}
*/
form.addEventListener('submit', e => handleSubmit(e));
clearBtn.addEventListener('click', e => reset(e));
init();


function init() {
    // if items are stored in local storage - pick them up
    const storedApiKey = localStorage.getItem('apiKey');
    const storedRegion = localStorage.getItem('regionName');

    if (storedApiKey === null || storedRegion === null) {
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
        clearBtn.style.display = 'none';
        errors.textContent = '';
    } else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
        results.style.display = 'none';
        form.style.display = 'none';
        clearBtn.style.display = 'block';
    }
}

function reset(e) {
    e.preventDefault();
    localStorage.removeItem('regionName');
    init();
}

function handleSubmit(e) {
    e.preventDefault();
    setUpUser(apiKey.value, region.value);
}

function setUpUser(apiKey, regionName) {
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('regionName', regionName);
    loading.style.display = 'block';
    errors.textContent = '';
    clearBtn.style.display = 'block';
    displayCarbonUsage(apiKey, regionName);
}

async function displayCarbonUsage(apiKey, region) {
    try {
        await axios
            .get('https://api.co2signal.com/v1/latest', {
                params: {
                    countryCode: region,
                },
                headers: {
                    'auth-token': apiKey,
                },
            })
            .then((response) => {
                let co2 = Math.floor(response.data.data.carbonIntensity);

                // calculateColor(co2)

                loading.style.display = 'none';
                form.style.display = 'none';
                myregion.textContent = region;
                usage.textContent =
                    Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
                fossilfuel.textContent =
                    response.data.data.fossilFuelPercentage.toFixed(2) +
                    '% (percentage of fossil fuels used to generate electricity)';
                results.style.display = 'block';
            });
    } catch (error) {
        console.log(error);
        loading.style.display = 'none';
        results.style.display = 'none';
        errors.textContent = 'Sorry, we have no data for the region you have requested.';
    }
}
