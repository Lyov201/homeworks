class Animal {
    speak()  {
        console.log("Animal make sound");
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Dog barks");
    }
}

const rex = new Dog;

rex.speak();