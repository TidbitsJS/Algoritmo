var Animal = function (species, name) {
  var obj = Object.create(objMethods);

  obj.species = species;
  obj.name = name;

  return obj;
};

var objMethods = {
  makeSound: function () {
    console.log("Hmm ahhh ahem Hahhh");
  },

  eat: function () {
    console.log("Food food Food");
  },

  sleep: function () {
    console.log("Zzzz Zzz Zz");
  },
};

var dog = Animal("Dog", "Bruno");
console.log("Before ", dog, dog.makeSound());

dog.makeSound = function () {
  console.log("Bark bark Bark");
};

console.log("After ", dog, dog.makeSound());

var cat = Animal("Cat", "Mani");
console.log(cat, cat.makeSound());

console.log("Dog says", dog.makeSound());
console.log("Cat says", cat.makeSound());
