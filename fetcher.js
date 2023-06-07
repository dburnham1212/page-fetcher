const fs = require('fs');
const request = require('request');

let fetchFile = () => {
  let args = process.argv.slice(2);
  const url = args[0];
  const filePath = args[1];
  if(args.length !== 2){
    throw new Error("Too many or too few arguments");
  }
  request(url, (_error, _response, body) => {
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