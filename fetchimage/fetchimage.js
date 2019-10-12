//we will use fs.read/write file
const fs = require('fs');
// required is how Node.js import module
// request is the simplest way to make http call
const request = require('request');

//1. make a function that will request imag from a website
//2. use fs to fetch portion of the image data and save into our local machine
//3, do that in a setTimeout function so we don't send request to the website api too
//fast

//loop 100 times and do the fetch request in every iteration. Every fetch request
function fetchImage() {

  for (let i = 0; i < 100; i += 1) {
    const filename = `image${i}.jpg`;

    setTimeout(
      () => {
        request("https://picsum.photos/250/250").pipe(fs.createWriteStream(filename));
      }, 3000
    );
  }
}

fetchImage();
