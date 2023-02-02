import { getDistributors, getFlowerNurseries, getFlowers, getNurseries, getNurseryDistros, getRetailers } from "./dataAccess.js"


export const Retailers = () => {
    const shops = getRetailers()
    const distros = getDistributors()
    const nurseries = getNurseries()
    const flowerNurseries = getFlowerNurseries()
    const nurseryDistros = getNurseryDistros()
    const flowers = getFlowers()

    const matchedDistro = (shop) => {
        const shopDistro = distros.find(distro => distro.id === shop.distributorId)
        
        const nurseryList = (shopDistro) => {
        const nurseryIdsOfDistro = nurseryDistros.filter(nurseryDistro => nurseryDistro.distributorId === shopDistro.id)
        
        const flowerList = (nurseryId) => {
            const flowerIdsOfNursery = flowerNurseries.filter(flowerNursery => flowerNursery.nurseryId === nurseryId.nurseryId)

            const flowerNameMatch = (flowerId) => {
                const flowerName = flowers.find(flower => flower.id === flowerId.flowerId)
                return `${flowerName.commonName}`
            }

            return `<ul>
            ${flowerIdsOfNursery.map(flowerId => {
                return `<li>${flowerNameMatch(flowerId)}</li>`
            }).join("")}
            </ul>`
        }

        const nurseryNameMatch = (nurseryId) => {
                const nurseryname = nurseries.find(nursery => nursery.id === nurseryId.nurseryId)
                return `${nurseryname.name}`
                }
            
                return `<h4>Nurseries:</h4>
                ${nurseryIdsOfDistro.map(nurseryId => {
                            return `<div class="nursery_name">${nurseryNameMatch(nurseryId)}<br>
                            Flowers Available:
                                    ${flowerList(nurseryId)}</div>`
                        }).join("")}`
            }
            
            let distroHTML = `
            <div class="distro_name">
            ${shopDistro.name}
            </div>
            <div class="nurseries">
            ${nurseryList(shopDistro)}
            </div>`
        
            return distroHTML
    }



    let html = `<div class="shopList">
    <h2>Flower Shops</h2>
    ${shops.map(shop => {
        return `
        <div class="shopInfo" id=${shop.id}>
            <h3>${shop.name}</h3>
            <div class="distributor">
            Distributor: ${matchedDistro(shop)}
            </div>
        </div>`

    }).join("")}
    </div>`
    return html
}

//GOAL: each shop should dispaly the distributor .find()
//which will display the nurseries .filter() then .find()
//which will display the flowers .filter() 