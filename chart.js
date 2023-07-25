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
          label: '# of Votes',
          data: totalVotes,
          borderWidth: 1,
        },
        {
          label: '# Shown',
          data: totalSeen,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
