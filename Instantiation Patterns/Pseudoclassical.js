var Animal = function (species, name) {
  this.species = species;
  this.name = name;
};

Animal.prototype.makeSound = function () {
  console.log("Hmm ahhh ahem Hahhh");
};

Animal.prototype.eat = function () {
  console.log("Food food Food");
};

Animal.prototype.sleep = function () {
  console.log("Zzzz Zzz Zz");
};

var dog = new Animal("Dog", "Bruno");
console.log(dog, dog.makeSound());

var cat = new Animal("Cat", "Mani");
console.log(cat, cat.makeSound());
