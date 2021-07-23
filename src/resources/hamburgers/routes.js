const express = require('express');

const hamburgersRoute = express();

// Database 🍔

const hamburgerdb = [
  {
    id: 8,
    name: 'Vegetarian Burger',
    restaurant: 'Indian Burgers',
    web: 'https://www.cookwithmanali.com/vegetarian-burger-indian-style/',
    description:
      'With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!',
    ingredients: [
      'american cheese',
      'burger sauce',
      'french mustard',
      'pickes',
      'onion',
      'Veggies',
    ],
  },
  {
    id: 9,
    name: 'Fat Santa',
    restaurant: 'Sky City Hamilton',
    web: 'https://skycityhamilton.co.nz/eat-drink/eat-burger/',
    description: 'A Christmas themed burger',
    ingredients: [
      'chicken thigh',
      'champagne ham',
      'sage and onion stuffing',
      'gravy mash',
      'lettuce',
      'tomato',
      'cranberry sauce',
    ],
  },
  {
    id: 10,
    name: 'Blondie',
    restaurant: 'Yankys',
    web: 'http://yankyslambton.co.za/menu/',
    description: 'Delicious steak burger',
    ingredients: [
      'steak',
      'BBQ sauce',
      'bacon',
      'egg',
      'cheese',
      'lettuce',
      'tomato',
      'onion',
      'gerkins',
    ],
  },
  {
    id: 11,
    name: 'Monster Burger',
    restaurant: 'Yankys',
    web: 'http://yankyslambton.co.za/menu/',
    description: 'Massive meaty burger - the size of a dinner plate',
    ingredients: [
      '250g patty',
      'bacon',
      'cheese',
      '2 eggs',
      'steak',
      'BBQ sauce',
      'lettuce',
      'tomato',
      'onion',
      'gerkins',
    ],
  },
];

// Get burgers

hamburgersRoute.get('/', (req, res) => {
  res.json({ Hamburger: hamburgerdb });
});

module.exports = hamburgersRoute;
