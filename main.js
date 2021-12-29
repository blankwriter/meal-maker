const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  get appetizers () {
  return this._courses.appetizers;
  },
  set appetizers (appetizersIn) {
  return this._courses.appetizers = appetizersIn ;
  },
  get mains () {
 return this._courses.mains;
  },
  set mains (mainsIn) {
  return this._courses.mains = mainsIn;
  },
  get desserts () {
  return this._courses.desserts;
  },
  set desserts (dessertsIn) {
   return this._courses.desserts = dessertsIn;
  },
  
  get courses () {
   return {
     appetizers: this.appetizers,
     mains: this.mains,
     desserts: this.desserts,
   }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
    name: dishName,
    price: dishPrice,

    };
    this._courses[courseName].push(dish);
  },

   getRandomDishFromCourse(courseName) {
   const dishes 
   = this._courses[courseName];
   const randIndex 
   = Math.floor(Math.random() * dishes.length);
   return dishes[randIndex];
  },
   generateRandomMeal() {
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
     return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
 }  
};
menu.addDishToCourse('appetizers', 'salad', 10);
menu.addDishToCourse('appetizers', 'tombrown', 2);
menu.addDishToCourse('appetizers', 'bread', 5);

menu.addDishToCourse('mains', 'banku', 15);
menu.addDishToCourse('mains', 'rice', 11);
menu.addDishToCourse('mains', 'beans', 17);

menu.addDishToCourse('desserts', 'ice cream', 7.50);
menu.addDishToCourse('desserts', 'mustard', 5);
menu.addDishToCourse('desserts', 'custard', 6);
let meal = menu.generateRandomMeal();
console.log(meal);
