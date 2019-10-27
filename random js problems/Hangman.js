'use strict';
// let wordToGuess = prompt('Please enter a word:');
let wordToGuess = 'ere';
let lettersToGuess = [...new Set(wordToGuess.split(''))];
console.log(lettersToGuess);
let attemps = 1;
while (lettersToGuess.length > 0) {
    let guessLetter = prompt('Guess the letter now:');
    let indexOfLetter = lettersToGuess.indexOf(guessLetter);
    if ( indexOfLetter >= 0) {
        // alert('Match');
        console.log('Match');
        lettersToGuess.splice(indexOfLetter, 1);
    } else {
        // alert('No match');
        console.log('No match');
    }
    attemps++;
}
// alert(`You Guess the word "${wordToGuess}" with ${attemps} attemps!`);
console.log(`You Guess the word "${wordToGuess}" with ${attemps} attemps!`);