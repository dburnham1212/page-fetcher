const fs = require('fs');
const request = require('request');

const filePath = "./index.html"

let fetchFile = () => {
  let args = process.argv.slice(2);
  if(args.length !== 2){
    throw new Error("Too many or too few arguments");
  }
  request('https://www.example.edu', (_error, _response, body) => {
    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  });
};

fetchFile();