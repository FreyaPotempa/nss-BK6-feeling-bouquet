

const localData = {
    flowers: [],
    retailers: [],
    distributors: [],
    nurseries: [],
    flowerNurseryRel: [],
    nurseryDistroRel: []
}

const API = "http://localhost:8088"

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
    .then(response => response.json())
    .then(
        (flowerList) => {
            localData.flowers = flowerList
        }
    )
}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
    .then(response => response.json())
    .then(
        (shopList) =>
        localData.retailers = shopList
    )
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
    .then(response => response.json())
    .then(
        (distroList) => {
            localData.distributors = distroList
        }
    )
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
    .then(response => response.json())
    .then(
        (nurseryList) =>
        localData.nurseries = nurseryList
    )
}

export const fetchFlowerNurseryRel = () => {
    return fetch(`${API}/flowerNurseryRel`)
    .then(response => response.json())
    .then(
        (flowerNuseries) => {
            localData.flowerNurseryRel = flowerNuseries
        }
    )
}

export const fetchNurseryDistroRel = () => {
    return fetch(`${API}/nurseryDistroRel`)
    .then(response => response.json())
    .then(
        (nurseryDistros) => {
            localData.nurseryDistroRel = nurseryDistros
        }
    )
} 

export const getFlowers = () => {
    return localData.flowers.map(flower => ({...flower}))
}

export const getRetailers = () => {
    return localData.retailers.map(retailer => ({...retailer}))
}

export const getDistributors = () => {
    return localData.distributors.map(distro => ({...distro}))
}

export const getNurseries = () => {
    return localData.nurseries.map(nursery => ({...nursery}))
}

export const getFlowerNurseries = () => {
    return localData.flowerNurseryRel.map(flowerNursery => ({...flowerNursery}))
}

export const getNurseryDistros = () => {
    return localData.nurseryDistroRel.map(nurseryDistro => ({...nurseryDistro}))
}