Daily challenge: Not Bad
Last Updated: September 22nd, 2023

What You will learn :
Use Javascript string and array methods
Use conditionals statement


Instructions
Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
Example:

  Your string is : 'This dinner is not that bad ! You cook well', 
  --> the result is : 'This dinner is good ! You cook well'

  Your string is : 'This movie is not so bad !' 
  --> the result is : 'This movie is good !'

  Your string is : 'This dinner is bad !' 
  --> the result is : 'This dinner is bad !'


  // Create a variable called sentence.
let sentence = 'This dinner is not that bad ! You cook well';

// Create a variable called wordNot to store the position of the substring "not".
const wordNot = sentence.indexOf('not');

// Create a variable called wordBad to store the position of the substring "bad".
const wordBad = sentence.indexOf('bad');

// Check if "bad" comes after "not" and replace "not...bad" with "good" if true.
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace the substring from "not" to "bad" with "good".
  sentence = sentence.substring(0, wordNot) + 'good' + sentence.substring(wordBad + 3);
}

console.log(sentence);


Explanation:
Variables:

sentence stores the string to be processed.
wordNot gets the index of the first occurrence of "not".
wordBad gets the index of the first occurrence of "bad".
Conditionals:

The if statement checks if both "not" and "bad" are present in the string and if "bad" comes after "not".
If the condition is true, the substring() method is used to extract parts of the string before and after "not...bad", and replace the substring with "good".
Result:

The modified sentence is logged to the console. If the conditions aren't met, the original sentence remains unchanged.
You can test different sentences by changing the value of the sentence variable to see how the code handles different cases.