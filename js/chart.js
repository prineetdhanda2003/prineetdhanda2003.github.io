const chartCanvas = document.getElementById('chart');

// data fetching logic
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

async function createChart() {
    const data = await fetchData();

    //Get data for chart
    const date = data.day.map(day => day.date);
    const count = data.day.map(day => day.count);

    const chartData = {
        labels: [date[0], date[1], date[2],date[3]], // Your labels for each slice
        datasets: [{
                data: [count[0],count[1],count[2],count[3]], //data value for each slice
                backgroundColor: ['#FF0000', '#00FF00','yellow','blue'], // Colors for each slice
                borderColor: 'black',
                borderWidth: 1,
            }]
    };

    const chartOptions = {
        scales: {
            yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
        }
    };

    new Chart(chartCanvas, {
        type: 'pie', // Chart type
        data: chartData,
        options: chartOptions
    });
}

createChart();
