import { database } from './fishData.js';

export const mostHolyFish = () => {
    let holyFishHTML = ""

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFishHTML += `
            <article class="fishList">
                <img src="${fish.image}" alt="Name: ${fish.name}" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">Name: ${fish.name}</h2>
                    <h3 class="fish__species">Species: ${fish.species}</h3>
                    <p class="fish__description"> Hailing from the ${fish.location}, 
                     ${fish.name} is ${fish.length} inches long, and has 
                    a/an ${fish.diet} diet.</p>
                </div>
            </article>
        `;
    
        }
    }

    return holyFishHTML
}

export const soldierFish = () => {
    let soldierFishHTML = ""

    for (const fish of database.fish) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierFishHTML += `
            <article class="fishList">
                <img src="${fish.image}" alt="Name: ${fish.name}" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">Name: ${fish.name}</h2>
                    <h3 class="fish__species">Species: ${fish.species}</h3>
                    <p class="fish__description"> Hailing from the ${fish.location}, 
                     ${fish.name} is ${fish.length} inches long, and has 
                    a/an ${fish.diet} diet.</p>
                </div>
            </article>
        `;
    
        }
    }

    return soldierFishHTML
}

export const regularFish = () => {
    let regularFishHTML = ""

    for (const fish of database.fish){
        if (fish.length % 3 && fish.length % 5 !== 0) {
            regularFishHTML += `
            <article class="fishList">
                <img src="${fish.image}" alt="Name: ${fish.name}" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">Name: ${fish.name}</h2>
                    <h3 class="fish__species">Species: ${fish.species}</h3>
                    <p class="fish__description"> Hailing from the ${fish.location}, 
                     ${fish.name} is ${fish.length} inches long, and has 
                    a/an ${fish.diet} diet.</p>
                </div>
            </article>
        `;
    
        }
    }

    return regularFishHTML
}