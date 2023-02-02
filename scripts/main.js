import { fetchDistributors, fetchFlowerNurseryRel, fetchFlowers, fetchNurseries, fetchNurseryDistroRel, fetchRetailers } from "./dataAccess.js"
import { Bouquet } from "./Bouquet.js"



const mainContainer = document.querySelector('#container')

export const renderAll = () => {
    fetchFlowers()
    .then(() => fetchRetailers())
    .then(() => fetchDistributors())
    .then(() => fetchNurseries())
    .then(() => fetchFlowerNurseryRel())
    .then(() => fetchNurseryDistroRel())
    .then(
        () => {
            mainContainer.innerHTML = Bouquet()
        }
    )
}

renderAll()