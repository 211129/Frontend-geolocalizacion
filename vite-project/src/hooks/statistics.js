const BASE_URL = 'https://apigya.ddns.net';

export const getSensorData = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/sensor-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error at statistics :', error);
    throw error;
  }
};

export const getStatistics = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/sensor-data/statistics`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error at statistics :', error);
    throw error;
  }
};


