import { getDistributors, getFlowerNurseries, getNurseries, getNurseryDistros, getRetailers } from "./dataAccess.js"


export const Retailers = () => {
    const shops = getRetailers()
    const distros = getDistributors()
    const nurseries = getNurseries()
    const flowerNurseries = getFlowerNurseries()
    const nurseryDistros = getNurseryDistros()

    const matchedDistro = (shop) => {
        const shopDistro = distros.find(distro => distro.id === shop.distributorId)
        
        const nurseryList = (shopDistro) => {
        const nurseryIdsOfDistro = nurseryDistros.filter(nurseryDistro => nurseryDistro.distributorId === shopDistro.id)
        
        const nurseryNameMatch = (nurseryId) => {
                const nurseryname = nurseries.find(nursery => nursery.id === nurseryId.nurseryId)
                return `${nurseryname.name}`
                }
            
                //now iterate through that array of nurseries and return the matching name
                return `<h4>Nurseries:</h4><ul>  
                ${nurseryIdsOfDistro.map(nurseryId =>{
                            return `<li>${nurseryNameMatch(nurseryId)}</li>`
                        }).join("")}
                        </ul>`
            }
            
            let distroHTML = `
            ${shopDistro.name}
            <section name="nurseries">
            ${nurseryList(shopDistro)}
            </section>`
        
            return distroHTML
    }



    let html = `<div class="shopList">
    <h2>Flower Shops</h2>
    ${shops.map(shop => {
        return `<div class="shopInfo" id=${shop.id}>
        <header class="shop__name">
        <h3>${shop.name}</h3>
        </header>
        <section class="distributor">
        Distributor: ${matchedDistro(shop)}
        </section>`

    }).join("")}
    </ul>`
    return html
}

//GOAL: each shop should dispaly the distributor .find()
//which will display the nurseries .filter() then .find()
//which will display the flowers .filter() 