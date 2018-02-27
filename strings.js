//challenge 1

var numOfSandwhiches = 8;
console.log("numOfSandwhiches", numOfSandwhiches);

//challenge 2

var name = "brian"
var string = "Hello " + name + " how are you doing today?"

console.log("string:", string);

//Challenge 3

var DNA = "GCAT";
var RNA = DNA.replace('T','U');
console.log("RNA:", RNA);

//Exercise 4

var animal = "Goat"

//var animal = "AlliGAtor"

if( animal.toLowerCase() === "AlliGAtor"){
//    debugger;
    console.log("small");
} 
//else if (animal.toLowerCase() === "goat"){
//    console.log("wide");
//}
else {
    console.log("wide");
}

var yarn = "the better string"
var domString = "<h4>" + yarn + "</h4>"
var myDiv= document.getElementById("yarn-holder")
myDiv.innerHTML =domString;
