'use strict';

const chartCanvas = document.getElementById('myChart');

function createVoteChart() {
  const productName = [];
  const totalVotes = [];
  const totalSeen = [];

  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    productName.push(currentProduct[i].name);
    totalVotes.push(currentProduct[i].timesClicked);
    totalSeen.push(currentProduct[i].timesSeen);
  }
}

new Chart(chartCanvas, {
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
