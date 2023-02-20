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

            countryInfo.innerHTML = `<p>Population: ${population}</p>
                                    <p>Capital: ${capital}</p>
                                    <p>Region: ${region}</p>
                                    <p>Flag: <img src=${flag} class="flag"></img></p>
                                    <p>Coat of arms: <img src=${coatOfArms} class="flag"></img></p>

                                    
            `;

        }
       


    } catch (error) {
        console.log(error);
        countryInfo.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
    
}

fetchCountry();

// Bordersto - linker