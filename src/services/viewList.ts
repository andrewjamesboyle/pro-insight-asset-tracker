const fetch = require('node-fetch');

export async function viewList(ListID: string) {
  const query = new URLSearchParams({
    Fields: 'ListID',
    Limit: '100',
    Sort: 'ListImportItemID',
    Dir: 'desc',
    Start: '0',
    MatchScore: '50',
    PropertyStatus: 'Selected',
    PersonStatus: 'Matched Primary',
  }).toString()

  // const listId = '778870'
  const resp = await fetch(
    `https://api.propertyradar.com/v1/lists/${ListID}/import/items?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
      },
    }
  )

  const data = await resp.json()
  console.log('view list response ', data)
  return data
}
