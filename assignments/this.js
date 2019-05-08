/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object binding is when "this" doesn't have anything more specific to bind to, it automatically refers to the page we're on
* 2. Implicit binding is when "this" refers to a defined "something" inside of the function, using .notation it refers to the item left of the dot
* 3. New binding "this" is used with constructor functions and refers to the newly created object in relation to the properties in the original constructor function.
* 4. Explicit "this" is used when you are overriding the original constructor object is set to (through new binding or implicit binding).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
myName("joe");

// Principle 2

// code example for Implicit Binding

const myWand = {
    wood: 'Hawthorne',
    inside: 'Unicorn Hair',
    talkWand: function(name) {
        console.log(`${name}'s wand is made of ${this.wood} and ${this.inside}`)
        console.log(this)
    }
}
myWand.talkWand('Krum')

const myPet = {
    attitude: "badass",
    petitude: function(name) {
        console.log(`${name} is such a ${this.attitude}`)
        console.log(this)
    }
}
myPet.petitude('Miracle')

// Principle 3

// code example for New Binding
function People(name) {
    this.word = "whatsup";
    this.name = name;
    this.greet = function() {
        console.log(this.word + this.name);
    }
}
const laura = new People(' jojo')
laura.greet()

//-------------------------------------------

function Dogbreed(type) {
    this.size = type.size;
    this.temperment = type.temperment;
    this.coat = type.coat;
    this.bark = type.bark;
    this.speak = function() {
        console.log(this.bark)
    }
}

const goldenRetriever = new Dogbreed({
    size: 'large', 
    temperment: 'sweet', 
    coat: 'long',
    bark: 'WOOF!'
})
goldenRetriever.temperment;
goldenRetriever.speak();


// Principle 4

// code example for Explicit Binding
const poodle = new Dogbreed({
    size: 'varies',
    temperment: 'aloof',
    coat: 'curly',
    bark: 'oof! oof!'
})
goldenRetriever.speak.call(poodle);
