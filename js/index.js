// const categoryContainer = document.querySelector(".categories");
// const url = "https://v2.jokeapi.dev/categories";

// async function fetchCategories() {
//     const response = await fetch(url);
//     const categoryList = await response.json();
//     console.log(categoryList);

//     categoryContainer.innerHTML = "";

    
//     for (let i = 0; i < categoryList.categories.length; i++) {
        
//         const category = categoryList.categories[i];
//         const categoryAli = categoryList.categoryAliases[i]?.resolved || '';
        
//         categoryContainer.innerHTML += `<a class="item" href="details.html?id=${category}">
//                                             <h2>${category}</h2>
//                                             <h4>${categoryAli}</h4>
//                                         </a>`;
//     }
// }

// fetchCategories();

// const categoryContainer = document.querySelector(".categories");

// const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`;

// async function fetchCategories() {
//     const response = await fetch(url);
//     const categoryList = await response.json();
//     console.log(categoryList);
    
//     categoryContainer.innerHTML = "";
    
//     for (let i = 0; i <= categoryList.drinks.length; i++) {
//         categoryContainer.innerHTML += `<a class="item" href="details.html?id=${categoryList.drinks[i].strDrink}">${categoryList.drinks[i].strDrink}</a>`;
//     }
// }
    
// fetchCategories();

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6f621df301mshad80769c0f1b46bp1b0358jsn4f30255e2e70',
//         'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//      }
// };

// async function getData() {
//     const url = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories";
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);

//     categoryContainer.innerHTML = "";
    
//     for (let i = 0; i <= data.length; i++) {
//         console.log(data[i]);
//         categoryContainer.innerHTML += `<a class="item" href="details.html?id=${data[i]}">${data[i]}</a>`;
//     }
// }

// getData();


const countryContainer = document.querySelector(".europe");
const url = "https://restcountries.com/v3.1/region/europe";

async function fetchCountries() {
    const response = await fetch(url);
    const countryList = await response.json();
    console.log(countryList);

    countryContainer.innerHTML = "";

    
    for (let i = 0; i < countryList.length; i++) {
        const countryName = countryList[i].name.common;
        const officialName = countryList[i].name.official
        const flag = countryList[i].flags.png
        countryContainer.innerHTML += `<a class="single" href="details.html?id=${countryName}">
                                        <h2>${countryName}</h2>
                                        <img src=${flag} class="flag"></img>
                                        <p>Official: ${officialName}</p>
                                        </a>`;
    }
}

fetchCountries();