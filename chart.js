'use strict';

const chartCanvas = document.getElementById('myChart');

function createVoteChart() {
  const productName = [];
  const totalVotes = [];
  const totalSeen = [];
  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    productName.push(currentProduct.name);
    totalVotes.push(currentProduct.timesClicked);
    totalSeen.push(currentProduct.timesSeen);
  }
  return new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [
        {
          label: 'Vote Count',
          data: totalVotes,
          borderWidth: 1,
          borderColor: '#2F89FC',
          backgroundColor: '#2F89FC',
        },
        {
          label: 'Shown Count',
          data: totalSeen,
          borderWidth: 1,
          borderColor: '#01937C',
          backgroundColor: '#01937C',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 90,
          },
        },
      },
    },
  });
}
