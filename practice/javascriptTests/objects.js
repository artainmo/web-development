const menu = {
  _courses: {
    _appetizer : [],
    _main : [],
    _dessert : [],
    get appetizer() { return this._appetizer; },
    set appetizer(arg) { this._appetizer = arg; },
    get main() { return this._main; },
    set main(arg) { this._main = arg; },
    get dessert() { return this._dessert; },
    set dessert(arg) { this._dessert = arg; }
  },

  get courses() { return this._course; },

  addDishToCourse(courseName, dishName, dishPrice)
  {
    dish = { name: dishName, price: dishPrice };
    this._courses['_' + courseName].push(dish);
  },

  getRandomDishFromCourse(courseName)
  {
    const dishes = this._courses['_' + courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },

  generateRandomMeal()
  {
    appetizer = this.getRandomDishFromCourse('appetizer');
    main = this.getRandomDishFromCourse('main');
    dessert = this.getRandomDishFromCourse('dessert');

    price = appetizer.price + main.price + dessert.price;
    return `${appetizer.name}\n${main.name}\n${dessert.name}\nTotal price: ${price}`;
  }
};

menu.addDishToCourse('appetizer', 'mozarella', 15);
menu.addDishToCourse('appetizer', 'salmon', 20);
menu.addDishToCourse('appetizer', 'tartar', 18);
menu.addDishToCourse('main', 'steak', 24);
menu.addDishToCourse('main', 'fish', 23);
menu.addDishToCourse('main', 'pizza', 11);
menu.addDishToCourse('dessert', 'ice cream', 11);
menu.addDishToCourse('dessert', 'Irish coffee', 8);
menu.addDishToCourse('dessert', 'fruit', 12);


meal = menu.generateRandomMeal();
console.log(meal);

console.log('----------------------------------------------------------------------------------')

const team = {
  _players : [{firstName: 'pablo', 
              lastName: 'Sanchez', 
              age: 11},
              {firstName: 'doku', 
              lastName: 'john', 
              age: 15},
              {firstName: 'lukaku', 
              lastName: 'mike', 
              age: 16},],
  _games : [{opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27},
            {opponent: 'Roci',
            teamPoints: 45,
            opponentPoints: 22},
            {opponent: 'Lacos',
            teamPoints: 37,
            opponentPoints: 55}],

  get players() { return this._players; },
  get games() { return this._games; },
  addPlayer(firstName, lastName, age)
  {
    this._players.push({
      firstName,
      lastName,
      age,
    });
  },
  addGame(opponent, teamPoints, opponentPoints)
  {
    this._games.push({
      opponent,
      teamPoints,
      opponentPoints
    });
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Hello', 6, 8);
team.addGame('World', 55, 76);
team.addGame('Wen', 22, 43);

console.log(team.games);
