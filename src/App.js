import React, { useState } from 'react'
import LineChart from './LineChart'

const App = () => {

  const [scrapedData, setScrapedData] = useState([])

  // make a request to api to fetch data from db
  // parse the name and average price from the data
  // set scrapedData state as the transformed data to be passed to line chart
  function getScrapedDataHandler() {
    fetch('http://127.0.0.1:8000/scrapedData')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const transformedScrapingResults = data.map(scrapingResult => {
          return {
            datetime: scrapingResult.datetime.$date,
            data: [
              {
                name: scrapingResult.data[0].name,
                price_avg: scrapingResult.data[0].price_avg
              },
              {
                name: scrapingResult.data[1].name,
                price_avg: scrapingResult.data[1].price_avg
              }
            ]
          }
        })
        setScrapedData(transformedScrapingResults)
      })
  }

  return (
    <div>
      <div onClick={getScrapedDataHandler}>Get Data</div>
      <LineChart scrapedData={scrapedData} />
    </div>
  )
}

export default App;
