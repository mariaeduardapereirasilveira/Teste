// 1. Crie uma função construtora `Book(title, author, year)`.
//    Instancie 3 livros com `new`. Adicione `displayInfo()` no .prototype
//    e demonstre que todos os livros têm acesso.

// 2. Implemente herança entre `Usuario` (name, age) e `Student` (+ course).
//    Use Usuario.call(this, ...) no construtor de Student e configure
//    Student.prototype = Object.create(Usuario.prototype).

// 3. Implemente a mesma hierarquia `Veiculo → Car` de duas formas:
//    - Com funções construtoras + .prototype
//    - Com `class` + `extends` + `super()`
//    Compare sintaxe e funcionalidade.

// 4. (Projeto integrador) Crie uma hierarquia:
//    - `Product` (id, name, price, calculateDiscount(percentage))
//    - `PhysicalProduct` (+ weight, calculateShipping())
//    - `DigitalProduct` (+ fileSizeMB, getDownloadLink())
//    Use `class`. Implemente 2 instâncias de cada tipo.

// 5. (Extra) Converta a hierarquia acima para usar #private fields:
//    torne `id` e `price` privados. Adicione getters públicos.

// 6. (Extra) Compare Symbol vs. #private: crie uma classe com ambos e
//    tente acessar cada um de fora. Qual é realmente privado?


//1
// ==========================================
// 1. FUNÇÃO CONSTRUTORA BOOK
// ==========================================

function Livro(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


// Adicionando displayInfo ao prototype
Livro.prototype.displayInfo = function () {
    return `${this.title} - ${this.author} (${this.year})`;
};


// Criando 3 livros usando new
const book1 = new Livro(
    "Dom Casmurro",
    "Machado de Assis",
    1899
);

const book2 = new Livro(
    "O Cortiço",
    "Aluísio Azevedo",
    1890
);

const book3 = new Livro(
    "Vidas Secas",
    "Graciliano Ramos",
    1938
);


// Testando
console.log(book1.displayInfo());
console.log(book2.displayInfo());
console.log(book3.displayInfo());


// Comprovando que o método está no prototype
console.log(book1.hasOwnProperty("displayInfo"));
// false

console.log(
    book1.displayInfo === book2.displayInfo
);
// true



//2
// ==========================================
// 2. PERSON → STUDENT
// ==========================================

function Usuario(name, age) {
    this.name = name;
    this.age = age;
}


Usuario.prototype.introduce = function () {
    return `Olá, meu nome é ${this.name} e tenho ${this.age} anos.`;
};


// Student herda de Usuario
function Student(name, age, course) {

    // Executa o construtor de Usuario
    Usuario.call(this, name, age);

    // Propriedade própria de Student
    this.course = course;
}


// Configurando a herança
Student.prototype = Object.create(Usuario.prototype);


// Corrigindo o constructor
Student.prototype.constructor = Student;


// Método próprio de Student
Student.prototype.study = function () {
    return `${this.name} está estudando ${this.course}.`;
};


// Criando estudante
const student1 = new Student(
    "Ana",
    20,
    "Engenharia"
);


// Testando
console.log(student1.name);
console.log(student1.age);
console.log(student1.course);

console.log(student1.introduce());
console.log(student1.study());



//3
// ==========================================
// 3A. CONSTRUTORES + PROTOTYPE
// ==========================================

function Veiculo(brand) {
    this.brand = brand;
}


Veiculo.prototype.start = function () {
    return `${this.brand} está ligado.`;
};


function Car(brand, model) {

    // Executa Veiculo
    Veiculo.call(this, brand);

    this.model = model;
}


// Herança
Car.prototype = Object.create(Veiculo.prototype);

Car.prototype.constructor = Car;


// Método próprio de Car
Car.prototype.drive = function () {
    return `${this.model} está dirigindo.`;
};


// Criando carro
const car1 = new Car(
    "Toyota",
    "Corolla"
);


console.log(car1.start());
console.log(car1.drive());


// ==========================================
// 3B. CLASS + EXTENDS
// ==========================================

class VeiculoClass {

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} está ligado.`;
    }
}


class CarClass extends VeiculoClass {

    constructor(brand, model) {

        // Chama o constructor da classe pai
        super(brand);

        this.model = model;
    }

    drive() {
        return `${this.model} está dirigindo.`;
    }
}


// Criando carro
const car2 = new CarClass(
    "Honda",
    "Civic"
);


console.log(car2.start());
console.log(car2.drive());


//4
// ==========================================
// 4. PROJETO INTEGRADOR
// ==========================================

// Classe pai
class Product {

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }


    calculateDiscount(percentage) {
        return this.price - (this.price * percentage / 100);
    }
}


// ==========================================
// PRODUTO FÍSICO
// ==========================================

class PhysicalProduct extends Product {

    constructor(id, name, price, weight) {

        super(id, name, price);

        this.weight = weight;
    }


    calculateShipping() {
        return this.weight * 10;
    }
}


// ==========================================
// PRODUTO DIGITAL
// ==========================================

class DigitalProduct extends Product {

    constructor(id, name, price, fileSizeMB) {

        super(id, name, price);

        this.fileSizeMB = fileSizeMB;
    }


    getDownloadLink() {
        return `https://site.com/download/${this.id}`;
    }
}


// ==========================================
// 2 PRODUTOS FÍSICOS
// ==========================================

const physical1 = new PhysicalProduct(
    1,
    "Notebook",
    3500,
    2.5
);

const physical2 = new PhysicalProduct(
    2,
    "Monitor",
    1500,
    5
);


// ==========================================
// 2 PRODUTOS DIGITAIS
// ==========================================

const digital1 = new DigitalProduct(
    3,
    "Curso JavaScript",
    200,
    1500
);

const digital2 = new DigitalProduct(
    4,
    "E-book JavaScript",
    50,
    20
);


// ==========================================
// TESTANDO
// ==========================================

console.log(physical1);
console.log(physical2);

console.log(digital1);
console.log(digital2);


// Desconto
console.log(
    physical1.calculateDiscount(10)
);

console.log(
    digital1.calculateDiscount(20)
);


// Frete
console.log(
    physical1.calculateShipping()
);

console.log(
    physical2.calculateShipping()
);


// Download
console.log(
    digital1.getDownloadLink()
);

console.log(
    digital2.getDownloadLink()
);



//5
// ==========================================
// 5. PRIVATE FIELDS
// ==========================================

class ProductPrivate {

    #id;
    #price;

    constructor(id, name, price) {
        this.#id = id;
        this.name = name;
        this.#price = price;
    }


    getId() {
        return this.#id;
    }


    getPrice() {
        return this.#price;
    }


    calculateDiscount(percentage) {
        return this.#price - (
            this.#price * percentage / 100
        );
    }
}


// Criando produto
const privateProduct = new ProductPrivate(
    10,
    "Notebook",
    3500
);


// Acesso através dos getters
console.log(privateProduct.getId());
console.log(privateProduct.getPrice());


// Isso causaria erro:
//
// console.log(privateProduct.#id);
// console.log(privateProduct.#price);

//6
// ==========================================
// 6. SYMBOL VS #PRIVATE
// ==========================================

const secretSymbol = Symbol("secret");


class Example {

    #privateValue = "Sou realmente privado";

    constructor() {

        // Propriedade usando Symbol
        this[secretSymbol] = "Sou protegido por Symbol";

        // Propriedade pública
        this.publicValue = "Sou público";
    }
}


const example = new Example();
