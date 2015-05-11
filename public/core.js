//var fs = require('fs');
////core modules (not using /fs)
//
//fs.writeFileSync("corn.txt", "Corn is good.  Corn is life");
//console.log(fs.readFileSync("corn.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky//thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));

console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
console.log(path.dirname(websiteAbout));

//setInterval(function(){
//   console.log("beef");
//}, 2000);

console.log(__dirname);
console.log(__filename);



