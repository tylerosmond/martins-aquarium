import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './fishFilter.js'

// Generate the fish list
// const fishHTML = fishList()
// const renderFishToDOM = (fishHTML) => {
//     const fishList = document.getElementById('fishList');
 
//     if (fishList) {
//         fishList.innerHTML = fishHTML;
//     } else {
//         console.error('Could not find element with id "fishList"');
//     }
//  };
//  renderFishToDOM(fishHTML)

const holyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

const renderHolyFishToDom = (holyFishHTML, soldierFishHTML, regularFishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`
    } else {
        console.error('Could not find element with id "fishList');
    }
};
renderHolyFishToDom(holyFishHTML, soldierFishHTML, regularFishHTML)

// Generate the care tips
const tipHTML = tipList()
const renderTipListToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');

    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"')
    }
};
renderTipListToDOM(tipHTML)

// Generate the location list
const locationHTML = locationList()
const renderLocationListToDom = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"')
    }
};
renderLocationListToDom(locationHTML)
// Render each HTML string to the correct DOM element
const holyFish = mostHolyFish()
const armyFish = soldierFish()
const regFish = regularFish()
const finalFish = `${holyFish}${armyFish}${regFish}`
const renderFinalListToDom = (finalFish) => {
    const finalList = document.getElementById('fishList')

    if (finaList) {
        finalList.innerHTML = finalFish;
    } else {
        console.error('Could not find element with id "fishList')
    }
};
renderFinalListToDom(finalFish)


