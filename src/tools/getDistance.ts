import axios, { AxiosResponse } from 'axios';

interface Coordinates {
    lat: number;
    lon: number;
}

interface GeocodeResult {
    length: number;
    address: string;
    coordinates: Coordinates | null;
}

export async function geocodeByAddresses(addresses: string[]): Promise<number | undefined> {
    const baseUrl = "https://nominatim.openstreetmap.org/search";
    const results: GeocodeResult[] = [];

    try {
        
        const promises = addresses.map(async (address) => {
            const params = {
                q: address,
                format: 'json',
            };
            const response: AxiosResponse = await axios.get(baseUrl, { params })
            const data = response.data

            if (data && data.length > 0) {
                const { lat, lon } = data[0]
                results.push({ address, coordinates: { lat: parseFloat(lat), lon: parseFloat(lon) } } as GeocodeResult)
            } else {
                results.push({ address, coordinates: null } as GeocodeResult)
            }
        });

        await Promise.all(promises);

        if (results[0].coordinates && results[1].coordinates) {
            return calculateDistance(results[0].coordinates, results[1].coordinates);
        } else {
            console.log("Не удалось получить координаты для одного из адресов")
            return undefined
        }
    } catch (error: any) {
        console.error("Ошибка при выполнении запроса:", error.message);
        return undefined;
    }
}

export function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
    const R = 6371;

    const lat1 = toRadians(coord1.lat);
    const lon1 = toRadians(coord1.lon);
    const lat2 = toRadians(coord2.lat);
    const lon2 = toRadians(coord2.lon);

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dlon / 2) * Math.sin(dlon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

const toRadians = (degrees: number): number => {
    return degrees * (Math.PI / 180);
};