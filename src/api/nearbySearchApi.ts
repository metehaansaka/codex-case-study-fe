export const findNearbyPlaces = async (formData: FormData) => {
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string' || value instanceof Blob) {
      params.append(key, value as string);
    }
  }
  const url = `http://localhost:8070/api/findNearbyPlaces?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
