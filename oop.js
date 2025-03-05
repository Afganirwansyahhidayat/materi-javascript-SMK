// 1. Membuat class Animal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// 2. Membuat class Rabbit sebagai turunan dari class Animal
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true); // Properti isMammal bernilai true
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

// 3. Membuat class Eagle sebagai turunan dari class Animal
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false); // Properti isMammal bernilai false
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// 4. Membuat instance dari class Rabbit bernama "myRabbit"
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat()); // Output: "Labi sedang makan!"

// 5. Membuat instance dari class Eagle bernama "myEagle"
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly()); // Output: "Elo sedang terbang!"
