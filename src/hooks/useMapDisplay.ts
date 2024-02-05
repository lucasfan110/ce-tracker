import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

function getMapboxRequestURL(searchParam: string): string {
    const uriEncoded = encodeURIComponent(searchParam);

    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${uriEncoded}.json?proximity=ip&access_token=pk.eyJ1IjoibHVjYXMtZmFuIiwiYSI6ImNsNmQxamEzZjAzcjEzY2xnZ2JybGw3bnkifQ.xMUVfHhAzRXdMmSPS6sJQA`;
}

async function getCoordsFromAddress(
    address: string
): Promise<[number, number]> {
    const requestURL = getMapboxRequestURL(address);

    const res = await fetch(requestURL);
    const json = await res.json();
    return json.features[0].geometry.coordinates;
}

function add3DLayer(map: mapboxgl.Map) {
    map.on("style.load", () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;

        const labelLayerId = layers.find(
            layer => layer.type === "symbol" && layer.layout?.["text-field"]
        )?.id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                id: "add-3d-buildings",
                source: "composite",
                "source-layer": "building",
                filter: ["==", "extrude", "true"],
                type: "fill-extrusion",
                minzoom: 15,
                paint: {
                    "fill-extrusion-color": "#aaa",

                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    "fill-extrusion-height": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        15.05,
                        ["get", "height"],
                    ],
                    "fill-extrusion-base": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        15.05,
                        ["get", "min_height"],
                    ],
                    "fill-extrusion-opacity": 0.6,
                },
            },
            labelLayerId
        );
    });
}

export default function useMapDisplay(
    location: string,
    container: React.RefObject<HTMLElement>
) {
    const map = useRef<mapboxgl.Map | null>(null);
    const [coord, setCoord] = useState<[number, number] | null>(null);

    useEffect(() => {
        (async () => {
            setCoord(await getCoordsFromAddress(location));
        })();
    }, [location]);

    useEffect(() => {
        if (map.current || !container.current || !coord) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: container.current,
            style: "mapbox://styles/mapbox/standard",
            center: coord,
            zoom: 16,
            pitch: 45,
            antialias: true,
        });

        new mapboxgl.Marker().setLngLat(coord).addTo(map.current);

        add3DLayer(map.current);
    });

    return;
}
