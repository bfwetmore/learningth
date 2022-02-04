class Pet {
    constructor(animal, age, breed, sound, activity) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;

    }

    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour < 20 && hour > 10) {
            return 'playing';
        }
        return 'sleeping';
    }

    speak() {
        console.log(this.sound);
    }

}

const ernie = new Pet("Dog", 1, "pug", 'yip yip');
const vera = new Pet("Dog", 8, 'border collie', 'woof woof', );

console.log(ernie.activity)