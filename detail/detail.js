import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
// on load get the id from URL
    const params = new URLSearchParams(window.location.search);
    // use the id to fetch the dog
    const dog = await getDog(params.get('id'));
    // render and
    const dogDiv = renderDogDetail(dog);
    // append this dog's details to the container
    dogDetailContainer.append(dogDiv);
}

loadData();