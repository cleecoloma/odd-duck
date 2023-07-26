'use strict';

const products = load();
let votes = 25;
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const image3Element = document.getElementById('image3');
const imageContainer = document.getElementById('image-container');
const resultsElement = document.getElementById('results');
const resultsDiv = document.getElementById('result-div');
const resultButton = document.getElementById('result-button');
const votesElement = document.getElementById('votes-remaining');
const currentNumbers = [
  Math.floor(Math.random() * 19),
  Math.floor(Math.random() * 19),
  Math.floor(Math.random() * 19),
];

function Product(name, src, timesClicked = 0, timesSeen = 0) {
  this.name = name;
  this.src = src;
  this.timesClicked = timesClicked;
  this.timesSeen = timesSeen;
  // products.push(this);
}

displayRandomProducts();
console.log(products);

// creates 3 random numbers
function displayRandomProducts() {
  let randomProductIndex1 = Math.floor(Math.random() * products.length);
  let randomProductIndex2 = Math.floor(Math.random() * products.length);
  let randomProductIndex3 = Math.floor(Math.random() * products.length);

  while (checkNumbers(randomProductIndex1)) {
    randomProductIndex1 = Math.floor(Math.random() * products.length);
  }

  while (
    randomProductIndex2 === randomProductIndex1 ||
    checkNumbers(randomProductIndex2)
  ) {
    randomProductIndex2 = Math.floor(Math.random() * products.length);
  }

  while (
    randomProductIndex3 === randomProductIndex1 ||
    randomProductIndex3 === randomProductIndex2 ||
    checkNumbers(randomProductIndex3)
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
  // console.log(randomProductIndex1);
  currentNumbers[0] = randomProductIndex1;
  products[randomProductIndex2].timesSeen++;
  // console.log(randomProductIndex2);
  currentNumbers[1] = randomProductIndex2;
  products[randomProductIndex3].timesSeen++;
  // console.log(randomProductIndex3);
  currentNumbers[2] = randomProductIndex3; //currentNumbers = [0, 8, 18]
}

// checks if number is in the currentNumber array
function checkNumbers(num) {
  for (let i = 0; i < currentNumbers.length; i++) {
    if (num === currentNumbers[i]) {
      return true;
    }
  }
  return false;
}

// code that runs when a user has voted on a Product
function handleProductClicks(event) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === event.target.alt) {
      products[i].timesClicked++;
      votes -= 1;
      // console.log(votes);
      updateVotes();
      save();
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

// displays the results upon clicking the View Results button
function displayResults() {
  resultsDiv.classList.remove('hide');
  resultsDiv.classList.add('show');
}

// updated the remaining votes depending on the votes variable
function updateVotes() {
  return (votesElement.textContent = votes);
}

updateVotes();

// handles the hiding and showing div for the results.
function handleSubmit(event) {
  const clickedButton = event.target.parentNode;
  clickedButton.classList.remove('show');
  resultsElement.classList.remove('hide-results');
  resultsElement.classList.add('show-results');
  createVoteChart();
}
resultButton.addEventListener('click', handleSubmit);

// saves the current state of products
function save() {
  let saveData = JSON.stringify(products);
  localStorage.setItem('products', saveData);
}

// loads data from local storage
function load() {
  let chartData = JSON.parse(localStorage.getItem('products'));
  if (!chartData) {
    return [
      new Product('bag', 'img/bag.jpg'),
      new Product('banana', 'img/banana.jpg'),
      new Product('bathroom', 'img/bathroom.jpg'),
      new Product('boots', 'img/boots.jpg'),
      new Product('breakfast', 'img/breakfast.jpg'),
      new Product('bubblegum', 'img/bubblegum.jpg'),
      new Product('chair', 'img/chair.jpg'),
      new Product('cthulhu', 'img/cthulhu.jpg'),
      new Product('dog-duck', 'img/dog-duck.jpg'),
      new Product('dragon', 'img/dragon.jpg'),
      new Product('pen', 'img/pen.jpg'),
      new Product('pet-sweep', 'img/pet-sweep.jpg'),
      new Product('scissors', 'img/scissors.jpg'),
      new Product('shark', 'img/shark.jpg'),
      new Product('sweep', 'img/sweep.png'),
      new Product('tauntaun', 'img/tauntaun.jpg'),
      new Product('unicorn', 'img/unicorn.jpg'),
      new Product('water-can', 'img/water-can.jpg'),
      new Product('wine-glass', 'img/wine-glass.jpg'),
    ];
  }
  return chartData;
}