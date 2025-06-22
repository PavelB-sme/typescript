import Cart from './ts/Cart'
const cart = new Cart;
const movie1 = new Cart('Inception', 2010, 'USA', 'Your mind is the scene of the crime.', 'Sci-Fi', 148, 200, 1);

cart.add({
  name: 'bobik',
  year: 2020,
  country: 'USA',
  slogan: 'Bobik gogo',
  genre: 'drams',
  time: 120,
  price: 200,
  id: 2,
})
const movi2 = new Cart;
cart.add({
  name: 'bobik',
  year: 2020,
  country: 'USA',
  slogan: 'Bobik gogo',
  genre: 'drams',
  time: 120,
  price: 500,
  id: 3,
})
cart.add(movie1)
cart.deleteProduct(2)

console.log(cart._items)