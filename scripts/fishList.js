import { database } from './fishData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';
 
    for (const fish of database.fish) {
        fishHTML += `
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
 
    return fishHTML
};