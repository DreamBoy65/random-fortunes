const fortunes = require("./src/fortunes.json")

function getFortunes(no) {
  let res;
  
  for(let i = 0; i < no; i++) {
    res.push(fortunes[Math.floor(Math.random() * fortunes.length)])
  }
  
  return res;
}

module.exports = getFortunes;