import { Flowers } from "./Flowers.js"
import { Retailers } from "./Retailers.js"


export const Bouquet = () => {
    return `
    <header class="top">
    <h1>Feeling Bouquet</h1>
    </header>
    <section class="retailers">
    ${Retailers()}
    </section>
    `
}