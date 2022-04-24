import React from 'react'
import { Line as LineJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {

    const labels = []
    const sscDataset = {}
    const saintsDataset = {}

    sscDataset.data = []
    saintsDataset.data = []

    props.scrapedData.forEach(element => {
        labels.push(element.datetime)
        sscDataset.data.push(element.data[0].price_avg)
        saintsDataset.data.push(element.data[1].price_avg)
    });

    sscDataset.label = "Sherringham Sock Company"
    sscDataset.fill = false
    sscDataset.borderColor = 'rgb(75, 192, 192)'

    saintsDataset.label = "Saints Socks"
    saintsDataset.fill = false
    saintsDataset.borderColor = 'rgb(75, 192, 5)'

    const lineData = {
        labels: labels,
        datasets: [sscDataset, saintsDataset]
    }

    return (
        <div>
            <Line data={lineData} />
        </div>
    )
}

export default LineChart