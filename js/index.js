
const countryContainer = document.querySelector(".europe");
const url = "https://restcountries.com/v3.1/region/europe";

async function fetchCountries() {
    try {
        const response = await fetch(url);
        const countryList = await response.json();
        console.log(countryList);

        countryContainer.innerHTML = "";
    
        for (let i = 0; i < countryList.length; i++) {
            const countryName = countryList[i].name.common;

            if (countryName === "Svalbard and Jan Mayen") {
                continue;
            }

            const officialName = countryList[i].name.official
            const flag = countryList[i].flags.png

            
            countryContainer.innerHTML += `<a class="single" href="details.html?id=${countryName}">
                                                <h2>${countryName}</h2>
                                                <img src=${flag} class="flag"></img>
                                                <p>Official: ${officialName}</p>
                                            </a>`;
        }
    }  catch (error) {
        console.log(error);
        countryContainer.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
}

fetchCountries()