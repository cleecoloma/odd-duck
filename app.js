'use strict';

const products = [];
let votes = 25;
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const image3Element = document.getElementById('image3');
const imageContainer = document.getElementById('image-container');

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.timesClicked = 0;
  this.timesSeen = 0;
  products.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

displayRandomProducts();
console.log(products);

function displayRandomProducts() {
  let randomProductIndex1 = Math.floor(Math.random() * products.length);
  let randomProductIndex2 = Math.floor(Math.random() * products.length);
  let randomProductIndex3 = Math.floor(Math.random() * products.length);

  while (
    randomProductIndex2 === randomProductIndex1 ||
    randomProductIndex2 === randomProductIndex3
  ) {
    randomProductIndex2 = Math.floor(Math.random() * products.length);
  }

  while (
    randomProductIndex3 === randomProductIndex1 ||
    randomProductIndex3 === randomProductIndex2
  ) {
    randomProductIndex3 = Math.floor(Math.random() * products.length);
  }
  image1Element.src = products[randomProductIndex1].src;
  image1Element.alt = products[randomProductIndex1].name;
  image2Element.src = products[randomProductIndex2].src;
  image2Element.alt = products[randomProductIndex2].name;
  image3Element.src = products[randomProductIndex3].src;
  image3Element.alt = products[randomProductIndex3].name;
  products[randomProductIndex1].timesSeen++;
  products[randomProductIndex2].timesSeen++;
  products[randomProductIndex3].timesSeen++;
  // console.log(randomProductIndex1);
  // console.log(randomProductIndex2);
  // console.log(randomProductIndex3);
}

// let addRound = document.getElementById('votes').textContent(`${votes}`);

// code that runs when a user has voted on a Product
function handleProductClicks(event) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === event.target.alt) {
      products[i].timesClicked++;
      votes -= 1;
      console.log(votes);
      updateVotes();
    }
  }
  // console.log(products);
  displayRandomProducts();
  if (votes === 0) {
    imageContainer.removeEventListener('click', handleProductClicks);
    displayResults();
  }
}

imageContainer.addEventListener('click', handleProductClicks);

const resultsElement = document.getElementById('results')
const resultsDiv = document.getElementById('result-div')
function displayResults() {
  for (let i = 0; i < products.length; i++) {
    let createParaElement = document.createElement('h4');
    createParaElement.textContent =
      `${products[i].name} had ${products[i].timesClicked} votes, and was seen ${products[i].timesSeen} times.`;
    resultsElement.appendChild(createParaElement);
  }
  resultsDiv.classList.add('show');
}


const votesElement = document.getElementById('votes-remaining');

function updateVotes() {
  return votesElement.textContent = votes;
}

updateVotes();

const resultButton = document.getElementById('result-button');
function handleSubmit(event) {
  const clickedButton = event.target.parentNode;
  clickedButton.classList.remove('show');
  clickedButton.classList.add('hide');
  results.classList.remove('hide-results');
  resultsElement.classList.add('show-results');
}
resultButton.addEventListener('click', handleSubmit);




