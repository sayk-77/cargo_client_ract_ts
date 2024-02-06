import axios from 'axios';

export const searchAddress = async (query: string): Promise<string[]> => {
  try {
    const response = await axios.post(
      'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token 034a455f3533ee00e2d6d1f2b8fb6a97cbea6a13`,
        },
      }
    );

    const data = await response.data;
    const addresses = data.suggestions.map((suggestion: any) => suggestion.value);
    return addresses;
  } catch (error) {
    console.error('Error fetching addresses:', error);
    throw new Error('Error fetching addresses');
  }
}