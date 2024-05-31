import { database } from './fishData.js';

export const locationList = () => {
    let locationHTML = ''

    for (const location of database.location) {
        locationHTML += `
            <article class="locations">
            <img src="${location.image}" alt="Name: ${location.name}" class="location__image">
                <section class="location__description">
                    <p class="location__name"><b>${location.name}</b></p>
                    <p>Located off the coast of ${location.country}, ${location.description}</p>
                </section>
            </article>
        `
    }
    return locationHTML
}