var Animal = function (species, name) {
  var obj = {};

  obj.species = species;
  obj.name = name;

  extend(obj, objMethods);
  return obj;
};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
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
