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
            const flag = countryDetails[i].flags.png;
            const region = countryDetails[i].subregion;
            const coatOfArms = countryDetails[i].coatOfArms.png;
            const borders = countryDetails[i].borders;

            console.log(Object.values(countryDetails[i].languages));
            const languages = Object.values(countryDetails[i].languages)
            const currencies = countryDetails[i].currencies.name;
            console.log(currencies);

            countryInfo.innerHTML = `<div class="details_imgs">
                                        <p>Flag: <img src=${flag} class="details-flag"></img></p>
                                        <p>Coat of arms: <img src=${coatOfArms} class="details-flag"></img></p>
                                    </div>
                                    <div class="details_info">
                                        <p><span class="bold">Population:</span> ${population}</p>
                                        <p><span class="bold">Capital:</span> ${capital}</p>
                                        <p><span class="bold">Region:</span> ${region}</p>
                                        <p><span class="bold">Borders:</span> ${borders}</p>
                                        <p><span class="bold">Currencies:</span> ${currencies}</p>
                                        <p><span class="bold">Languages:</span> ${languages}</p>
                                    </div>
                                    
            `;

        }
       


    } catch (error) {
        console.log(error);
        countryInfo.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
    
}

fetchCountry();

