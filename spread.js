console.log('In spread.js');

let numbers = [3, 5, 7, 9, 11];
console.log('Array called numbers:', numbers);

numbers.push(13);
console.log('Modified version of numbers:', numbers);

// Creates a new array of merged arrays without changing the original arrays
let updatedNumberSet = [...numbers, 21];
console.log('Number set using spread:', updatedNumberSet);

// Spread also works with Objects
let person = {
   name: 'Malik',
   city: 'Saint Paul'
}
console.log(person);
let updatedPerson = {
   ...person,
   state: 'MN',
   zip: '55117'
}

console.log(updatedPerson);