const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
colors.join(' , ');
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.

colors.splice(1, 2, 'purple', 'pink');
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.

colors.map(color =>color.toUpperCase());

// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const colorStartingWithB = colors.find(color => color.startsWith('B'));
// blue
// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
colors.slice(1, 4);