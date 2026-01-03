export const population = await fetchPopulationData()

async function fetchPopulationData() {
    const data = await fetch("/population.json").then(res => res.json()).then((data) =>
        data
          .slice(1) // removes a header line
          .map(([p, state, county]) => ({
            state,
            fips: `${state}${county}`,
            population: +p
          }))
      )
    return data
}