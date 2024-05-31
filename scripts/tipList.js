import { database } from './fishData.js';

export const tipList = () => {
    let tipHTML = '<b>Tips For Maintaining Your Aquarium:</b>\n'

    for (const tip of database.tips) {
        tipHTML += `
            <article class="tipList">
                <div class="tip__details">
                        <ul class="tips">
                            <li class="tip"><b>${tip.topic}:</b> ${tip.text}</p>
                        </ul>
                </div>
            </article>
        `;
    }
    return tipHTML
}