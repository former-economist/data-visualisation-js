import { feature, mesh } from "topojson"

async function fetchUsData(){
    const data = await fetch("/counties-albers-10m.json")
  
    return await data.json()
}

export const us = await fetchUsData()

export const nation = feature(us, us.objects.nation)

export const statemap = new Map(feature(us, us.objects.states).features.map(d => [d.id, d]))

export const countymap = new Map(feature(us, us.objects.counties).features.map(d => [d.id, d]))

export const statemesh = mesh(us, us.objects.states, (a, b) => a !== b)

