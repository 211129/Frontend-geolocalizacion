const BASE_URL = 'https://apigya.ddns.net';

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error at login :', error);
    throw error;
  }
};