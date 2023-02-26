
const countryContainer = document.querySelector(".europe");
const url = "https://restcountries.com/v3.1/region/europe";

async function fetchCountries() {
    try {
        const response = await fetch(url);
        const countryList = await response.json();
        console.log(countryList);

        countryContainer.innerHTML = "";

        countryList.sort(function(a, b) {
            const countryA = a.name.common.toLowerCase();
            const countryB = b.name.common.toLowerCase();
          
            if (countryA < countryB) {
              return -1;
            } else if (countryA > countryB) {
              return 1;
            } else if (countryA === countryB) {
              return 0;
            }
        });
        
    
        for (let i = 0; i < countryList.length; i++) {
            const independent = countryList[i].independent;

            if (independent === false) {
                continue;
            }
            
            const countryName = countryList[i].name.common;

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