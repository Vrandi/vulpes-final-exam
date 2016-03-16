'use strict';

function fileWriter(filename, content, callback, fs) {
  var fs = fs || require('fs');
  setTimeout(() => {
    fs.writeFile(filename, JSON.stringify(content), (err) => {
      if (err) return callback(err);
      callback('ok');
    });
  }, 2000);
}

fileWriter('alma.txt', { alma: 'cool'}, (response) => {
  console.log(response);
});
