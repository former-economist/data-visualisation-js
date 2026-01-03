import { geoPath } from "d3"

export function centroid(feature) {
    const path = geoPath();
    return path.centroid(feature);
  }