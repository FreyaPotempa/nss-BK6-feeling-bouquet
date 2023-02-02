import { getFlowers } from "./dataAccess.js"


export const Flowers = () => {
    const flowers = getFlowers()

    let html = `<h2>Flowers</h2>
    <ul>
    ${flowers.map(flower => {
        return `<li>${flower.commonName}</li>`
    }).join("")}
    </ul>`

    return html
}