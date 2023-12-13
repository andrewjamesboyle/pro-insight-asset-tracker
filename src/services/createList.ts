const fetch = require('node-fetch');

const createList = async () => {
  try {
    console.log("api key", process.env.PROPERTY_RADAR_API_KEY)
    const response = await fetch('https://api.propertyradar.com/v1/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
      },
      body: JSON.stringify({
        ListName: 'Assessment 10',
        ListType: 'import',
        isMonitored: 0,
        ImportSource: 'api',
        ImportMatchThreshold: 27,
        ImportType: 'property',
      }),
    })
  
      const data = await response.json();
      console.log('create list response: ', data);
      return data;
  } catch (error: any) {
    console.error('Error creating list:', error.message);
    throw error;  }
}

export default createList
