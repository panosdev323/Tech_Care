let currentChart = null;
export const displayChart = (systolic, diastolic, labelsData, systolicDts, diastolicDts) => {
    const ctx = document.getElementById('myChart');
    if (currentChart) {
        currentChart.destroy();
    }
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsData,
            datasets: [
                {
                    label: ['Systolic',systolicDts[0].value,systolicDts[0].levels],
                    data: systolic,
                    borderWidth: 1,
                    borderColor:'#E66FD2',
                },
                {
                    label: ['Diastolic',diastolicDts[0].value,diastolicDts[0].levels],
                    data: diastolic,
                    borderWidth: 1,
                    borderColor:'##8C6FE6',
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    align:'start',
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        color: 'black'
                    }
                },
                title: {
                    display: true,
                    text: 'Blood Pressure',
                    align: 'start',
                    color:'#072635',
                    font: {
                        size: 18
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
        }
    });
}