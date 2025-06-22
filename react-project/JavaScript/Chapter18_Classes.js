//classes
//blueprint and structure or template for object
//key word class
class Pizza {
  constructor(typePizza, sizeOfThePizza, crust) {
    this.type = typePizza;
    this.size = sizeOfThePizza;
    this.crust = crust;
    this.toppings = [];
    //this refers the object here
  }
  //getter setter
  get toppingsPizza() {
    return this.toppings;
  }
  set toppingsPizza(toppingsPizza) {
    this.toppings.push(toppingsPizza);
  }
  bake() {
    return `Backing a ${this.size} ${this.type} ${this.crust} pizza with toppings of ${this.toppings}`;
  }
}

const pizza = new Pizza("margarita", "medium", "Original"); //whenever we try to create a new pizza -> new object we can pass the properties for that pizza here

pizza.toppingsPizza = "Sussage";
pizza.toppingsPizza = "Olives"
// console.log(pizza.toppings); //['Sussage', 'Olives']

// console.log(pizza.bake()); //Backing a medium margarita Original pizza with toppings of Sussage
// console.log(pizza.size); //Large
// console.log(pizza.crust); //Original
// console.log(pizza.type); //margarita

//instead of get and set we can use functions

class Burger {
  constructor(type) {
    this.type = type;
    this.size = 'small'
  }
  organize() {
    return `This is a ${this.type} burger and ${this.size} in size`;
  }
  getSize(){
    return this.size;
  }
  setSize(newSize){
    this.size = newSize
  }
}
const burger = new Burger('Chicken')
// console.log( burger.getSize());
burger.setSize('Large')
// console.log(burger.organize()); //This is a Chicken burger and Large in size


//Concept of Parent and Child class -> Start we start?

class Roll {
    crust = "Original";
    #sauce = 'Tomato'
    constructor(sizeRoll){
        this.size = sizeRoll;
    }
    getCrust(){
        return this.crust
    }
    setCrust(crustRoll){
        this.crust = crustRoll
    }
}
const roll = new Roll("Large");
console.log(roll.sauce); //undefined
// console.log(roll.#sauce);//Chapter18_Classes.js:75 Uncaught SyntaxError: Private field '#sauce' must be declared in an enclosing class



class specialRoll extends Roll{
    constructor(sizeRoll){
        super(sizeRoll);
        this.type = "Chicken roll"
    }
    pieces(){
        console.log(`Our ${this.crust} ${this.type} has 4 pieces ${this.size} ${this.sauce}`);
    }
}
const specialRollObj = new specialRoll("Large");
specialRollObj.sauce = 'Chilli'
console.log(specialRollObj.sauce); //chilli
specialRollObj.crust = "After changed"
console.log(specialRollObj.crust);


specialRollObj.pieces()

//on the above cases we can change the values of the properties of the class
//to avoid this we can use # -> still able to modify how?


