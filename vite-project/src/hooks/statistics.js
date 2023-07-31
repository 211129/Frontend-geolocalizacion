const BASE_URL = 'https://3.232.226.37';

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


