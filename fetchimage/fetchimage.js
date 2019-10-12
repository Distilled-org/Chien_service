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
//should create a file to store a single image. We should have 100 images at the end
function fetchImage() {
  for (var i = 0; i < 100; i += 1) {
    //generate a different file name for each image every time
    const filename = `image${i}.jpg`;

    //setTimeout function
    setTimeout(
      function() {
        //use request() to generate a request object so we can apply method on it
        //pipe: pipeline consists of a chain of processing elements, arranged so that the output of each element is the input of the next.
        //A pipe function takes an n sequence of operations; in which each operation takes an argument; process it; and gives the processed output as an input for the next operation in the sequence. The result of a pipe function is a function that is a bundled up version of the sequence of operations.
        //The function fs.createWriteStream() creates a writable stream in a very simple manner. After a call to fs.createWriteStream with the filepath, you have a writeable stream to work with
        request("https://picsum.photos/250/250").pipe(fs.createWriteStream(filename)); },
        3000
      );
  }
}

fetchImage();