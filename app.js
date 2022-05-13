import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load

async function loadData() {
    const dogs = await getDogs();
    const dogListContainer = document.getElementById('dog-list-container');

    // fetch all dogs

    for (let dog of dogs) {
        const dogDiv = renderDog(dog);
        // render and append all dog cards to the container
        dogListContainer.append(dogDiv);
    }
}
