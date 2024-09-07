// # Daily challenge: Anagram
// # Last Updated: September 22nd, 2023

// # What You will learn :
// # Functions
// # Array methods


// # Instructions
// # Create a function that:

// # takes in two strings as two parameters
// # and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// # Some Help

// # What is an anagram?
// # An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// # Example of anagrams

// # "Astronomer" is an anagram of "Moon starer"
// # "School master" is an anagram of "The classroom"
// # "The Morse Code" is an anagram of "Here come dots"


// # Do we need to consider whitespace? yes
// # Trim whitespace prior to comparison.


function isAnagram(str1, str2) {
    
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();

   
    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');

   
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("Hello", "World")); 
