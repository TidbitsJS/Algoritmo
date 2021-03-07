class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  makeSound() {
    console.log("Hmm ahhh ahem Hahhh");
  }

  eat() {
    console.log("Food food Food");
  }

  sleep() {
    console.log("Zzzz Zzz Zz");
  }
}

var dog = new Animal("Dog", "Bruno");
console.log(dog);

var cat = new Animal("Cat", "Mani");
console.log(cat, cat.makeSound());

dog.makeSound = function () {
  console.log("Bark bark Bark");
};

console.log(dog, dog.makeSound());
