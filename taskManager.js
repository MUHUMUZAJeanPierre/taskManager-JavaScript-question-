const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  {name: 'Album', price: 5 },
  { name: 'Phone', price: 500},
  { name: 'Computer', price: 1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one);
const cheapProducts = items.filter(item => item.price <=10 );
console.log('cheapProducts: ', cheapProducts);
// 2. Filter and show the product that will be expensive in the array
const expensiveProducts = items.filter(item => item.price > 100);
console.log('cheapProducts: ', expensiveProducts);
// 3. Calculate the full price of all products combined
const totalPrice = items.reduce((totalPrice, item) => totalPrice + item.price, 0);
console.log('totalPrice: ', totalPrice);
// 4. Calculate the full price of all products combined and remove products that are under $10
const totalPriceOverTen = items.filter(item => item.price >= 10).reduce((totalPrice, item) => totalPrice + item.price, 0);
console.log(totalPriceOverTen);
// 5. Filter and show the product that will be started with letter b at first postion.
const productsStartingWithLetterB = items.filter(item => item.name.charAt(0).toLocaleLowerCase() === 'b');
console.log('productsStartingWithLetterB: ', productsStartingWithLetterB);


