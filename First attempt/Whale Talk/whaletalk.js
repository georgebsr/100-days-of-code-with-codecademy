const input = "This is a test phrase. Whales assemble";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i); //Test
  if (input[i] === "e") {
    resultArray.push(input[i]); //double e
  } else if (input[i] === "u") {
    resultArray.push(input[i]); //double u
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j); //Test
    if (input[i] === vowels[j]) {
      //console.log(vowels[j]); //Test
      resultArray.push(input[i]); //add vowels to result
    }
  }
}
//console.log(resultArray);
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
