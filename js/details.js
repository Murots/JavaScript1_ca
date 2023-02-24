const heading = document.querySelector(".country-heading");
const countryInfo = document.querySelector(".country");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const nameId = params.get("id");
console.log(nameId);

heading.innerHTML = nameId;

const url = "https://restcountries.com/v3.1/name/" + nameId;
console.log(url); 

async function fetchCountry() {
    try {
        const response =  await fetch(url);
        const countryDetails = await response.json();
        console.dir(countryDetails);

        for (let i = 0; i < countryDetails.length; i++) {
            const population = countryDetails[i].population;
            const capital = countryDetails[i].capital;
            const flag = countryDetails[0].flags.png;
            const region = countryDetails[i].subregion;
            const coatOfArms = countryDetails[i].coatOfArms.png;
            const timeZone = countryDetails[i].timezones.join(", ");
            const shortName = countryDetails[i].fifa;
            console.dir(countryDetails[i].fifa);

            if (!countryDetails[i].borders) {
                borders = "Remote island";
            } else {
                borders = countryDetails[i].borders.join(", ");
            }

            console.log(Object.values(countryDetails[i].languages));
            const languageTest = Object.values(countryDetails[i].languages);
            const languages = languageTest.join(", ");
           
            const currencies = countryDetails[i].currencies;
            const currencyString = Object.values(currencies).map(function(currency) {
                return currency.name;
            });
            console.log(currencyString);

            countryInfo.innerHTML = `<div class="details_info">
                                        <p><span class="bold">Population:</span> ${population}</p>
                                        <p><span class="bold">Capital:</span> ${capital}</p>
                                        <p><span class="bold">Region:</span> ${region}</p>
                                        <p><span class="bold">Currencies:</span> ${currencyString}</p>
                                        <p><span class="bold">Languages:</span> ${languages}</p>
                                        <p><span class="bold">Borders:</span> ${borders}</p>
                                        <p><span class="bold">Time zone:</span> ${timeZone}</p>
                                        <p><span class="bold">Short:</span> ${shortName}</p>
                                    </div>
                                    <div class="details_imgs">
                                        <p>Flag: <img src=${flag} class="details-flag"></img></p>
                                        <p>Coat of arms: <img src=${coatOfArms} class="details-flag"></img></p>
                                    </div>`;     
                                    
        }

    } catch (error) {
        console.log(error);
        countryInfo.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
    
}

fetchCountry();




