import { Flowers } from "./Flowers.js"
import { Retailers } from "./Retailers.js"


export const Bouquet = () => {
    return `
    <h1>Feeling Bouquet</h1>
    <section class="flowers">
    ${Flowers()}
    </section>
    <section class="retailers">
    ${Retailers()}
    </section>
    `
}