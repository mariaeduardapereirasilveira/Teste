// 1. Crie um objeto `person` com `name`, `age` e método `introduce()`
//    que retorna "Olá, me chamo [nome] e tenho [idade] anos".
//    Depois crie 3 objetos herdando de `person` via Object.create().

// 2. Crie uma cadeia: Vehicle → Car → myCar.
//    Cada nível adiciona propriedades/métodos.
//    Use Object.getPrototypeOf() para verificar a cadeia.

// 3. Crie um objeto `student` com protótipo contendo `calculateAverage()`.
//    No filho, adicione `grade` que sombreia `grade` do protótipo.
//    Use Object.hasOwn() para comprovar.

// 4. Crie `library` e dois `book` herdando dele.
//    Adicione `renewCatalog()` ao protótipo DEPOIS de criar os livros.
//    Demonstre que ambos passam a ter o método.


//1
const person = {
    name: "",
    age: 0,
    introduce (){

    return `Olá, me chamo ${this.name} e tenho ${this.age} anos`
    }


}
    const person1= Object.create(person);
    person1.name = "Rosa";
    person.age= 32;

    const person2 = Object.create(person);
    person2.name = "Carlos";
    person2.age = 30;

    const person3 = Object.create(person);
    person3.name = "Mariana";
    person3.age = 22;

    console.log(person1.introduce());
    console.log(person2.introduce());
    console.log(person3.introduce());



    //2
  const Vehicle = {
    type: "Veículo",

    move() {
        return `${this.brand} está se movendo.`;
    }
};

const Car = Object.create(Vehicle);

Car.wheels = 4;

Car.drive = function () {
    return `${this.brand} está dirigindo.`;
};

const myCar = Object.create(Car);

myCar.brand = "Toyota";
myCar.model = "Corolla";

console.log(myCar.type);
console.log(myCar.wheels);
console.log(myCar.brand);
console.log(myCar.model);

console.log(myCar.move());
console.log(myCar.drive());

console.log(Object.getPrototypeOf(myCar) === Car);
console.log(Object.getPrototypeOf(Car) === Vehicle);


//3
const student= {
    grade: 8,
    calculateAverage(){
        return this.grade;
    }
}

const student1= Object.create(student);
student1.grade= 10;
console.log(student.grade);
console.log(student1.grade);

//Essa propriedade pertence diretamente a este objeto? retorna true ou false
console.log(Object.hasOwn(student, "grade"));
console.log(Object.hasOwn(student1, "grade"));

//4
const library= {
    name: "Biblioteca Central",
};

const book1 = Object.create(library);
book1.title= "Oração para desaparecer";
const book2 = Object.create(library);
book2.title=  "Acabeça do santo";

library.renewCatalog = function (){
    return "Catálogo atualizado!";
}

console.log(book1.renewCatalog());
console.log(book2.renewCatalog());