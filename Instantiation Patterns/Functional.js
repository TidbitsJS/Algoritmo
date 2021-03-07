function Animal(species, name) {
  var obj = {};

  obj.species = species;
  obj.name = name;

  obj.makeSound = function () {
    console.log("Hmm ahhh ahem Hahhh");
  };

  obj.eat = function () {
    console.log("Food food Food");
  };

  obj.sleep = function () {
    console.log("Zzzz Zzz Zz");
  };

  return obj;
}

var dog = Animal("Dog", "Bruno");
console.log("Dog before", dog, dog.makeSound());

dog.makeSound = function () {
  console.log("Bark bark Bark");
};

console.log("Dog after", dog, dog.makeSound());

var cat = Animal("Cat", "Mani");
console.log(cat, cat.makeSound());
