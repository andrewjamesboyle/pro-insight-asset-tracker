const fetch = require('node-fetch');

const matchList = async (listId: string, contacts:any) => {
  const query = new URLSearchParams({
    Purchase: '1',
    Fields: 'ListImportItemID',
  }).toString()
  try {
    const response = await fetch(
      `https://api.propertyradar.com/v1/lists/${listId}/import/items?${query}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
        },
        body: JSON.stringify(contacts),
      }
    )
    const data = await response.json()
    console.log('match and import response', data)
  } catch (error) {
    console.error('Request Error:', error)
  }
}

export default matchList
