const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];

console.log(notes);

// adds an item to the end of the array
notes.push('Copilot is a great help');

console.log(notes);

// adds an item to the beginning of the array
notes.unshift('CSS is crazy');

console.log(notes);

// pop removes the last item in the array
notes.pop();

console.log(notes);

// shift removes the first item from the array
notes.shift();

console.log(notes);

const notes2=notes;

// to remove an item at a certain index, we use splice
// you pass in the index of where you wan to start deleting and then the amount of items you want to remove
notes.splice(1, 1);
console.log(notes2);