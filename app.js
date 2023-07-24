'use strict';

const products = [];
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

new Product('bag', 'assets/img/bag.jpg');
new Product('banana', 'assets/img/banana.jpg');
new Product('bathroom', 'assets/img/bathroom.jpg');
new Product('boots', 'assets/img/boots.jpg');
new Product('breakfast', 'assets/img/breakfast.jpg');
new Product('bubblegum', 'assets/img/bubblegum.jpg');
new Product('chair', 'assets/img/chair.jpg');
new Product('cthulhu', 'assets/img/cthulhu.jpg');
new Product('dog-duck', 'assets/img/dog-duck.jpg');
new Product('dragon', 'assets/img/dragon.jpg');
new Product('pen', 'assets/img/pen.jpg');
new Product('pet-sweep', 'assets/img/pet-sweep.jpg');
new Product('scissors', 'assets/img/scissors.jpg');
new Product('shark', 'assets/img/shark.jpg');
new Product('sweep', 'assets/img/sweep.jpg');
new Product('tauntaun', 'assets/img/tauntaun.jpg');
new Product('unicorn', 'assets/img/unicorn.jpg');
new Product('water-can', 'assets/img/water-can.jpg');
new Product('wine-glass', 'assets/img/wine-glass.jpg');

displayRandomProducts();
console.log(Products);

function displayRandomProducts() {
  let randomProductIndex1 = Math.floor(Math.random() * Products.length);
  let randomProductIndex2 = Math.floor(Math.random() * Products.length);

  while (randomProductIndex1 === randomProductIndex2) {
    randomProductIndex2 = Math.floor(Math.random() * Products.length);
  }

  image1Element.src = Products[randomProductIndex1].src;
  image1Element.alt = Products[randomProductIndex1].name;
  image2Element.src = Products[randomProductIndex2].src;
  image2Element.alt = Products[randomProductIndex2].name;
  Products[randomProductIndex1].timesSeen++;
  Products[randomProductIndex2].timesSeen++;
}

// code that runs when a user has voted on a Product
function handleProductClicks(event) {
  // console.log(event.target.alt);

  for (let i = 0; i < Products.length; i++) {
    if (Products[i].name === event.target.alt) {
      Products[i].timesClicked++;
    }
  }
  console.log(Products);
  displayRandomProducts();
}

ProductContainer.addEventListener('click', handleProductClicks);
// ProductContainer.removeEventListener('click', handleProductClicks)
