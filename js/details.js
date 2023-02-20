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

        const capital = countryDetails.name;

        for (let i = 0; i < countryDetails.length; i++) {
            const capital = countryDetails[i].capital;
            const language = countryDetails[i].languages;

            countryInfo.innerHTML = `<h2>${capital}</h2>
                                    <h2>${language}</h2>
            `;

        }
       


    } catch (error) {
        console.log(error);
        countryInfo.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
    
}

fetchCountry();

// Bordersto - linker