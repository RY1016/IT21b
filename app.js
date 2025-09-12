class Person{
    
    name; 
    age;
    occupation;
    message;

    constructor (name, age, occupation, message) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Message: " + this.message);
        console.log("__________________________")
    }

    showname(){
        console.log(this.name);
    }

}

const person1 = new Person ("Coco Martin",24, "Masahista", "Ser, Tapos na po");
const person2 = new Person ("Ry",24, "Basta", "niGGatron!");
const person3 = new Person ("Ryzen",24, "Ml Player", "Sheesh!");

person1.displayInfo();
person2.displayInfo();
