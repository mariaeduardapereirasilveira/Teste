// 1. Crie uma cadeia: Animal → Mammal → Dog → myPet.
//    Cada nível adiciona propriedades/métodos.
//    Use Object.getPrototypeOf() e isPrototypeOf() para navegar/validar.

// 2. Crie `employee` que herda de `person`. Adicione `introduce()`
//    no filho que COMPLEMENTA (não substitui) o do pai.
//    Use Object.getPrototypeOf(this).introduce().

// 3. Crie vários objetos herdando de `Vehicle`. Adicione `start()`
//    ao protótipo DEPOIS que os objetos foram criados.
//    Demonstre que todos passam a ter o método.

// 4. Implemente `isVehicleType(object)` que retorna `true` se o objeto
//    herda (direta ou indiretamente) de um protótipo `Vehicle`.
//    Use isPrototypeOf() ou Object.getPrototypeOf().

// 5. (Extra) Use mixins para compor um objeto `smartDevice` com
//    comportamentos `canConnect`, `canUpdate`, `canReset` sem usar herança.


//1
const Animal = {
    kingdom: "Animal",

    eat() {
        return "O animal está comendo.";
    }
};

const Mammal = Object.create(Animal);

Mammal.hasFur = true;

Mammal.breathe = function () {
    return "O mamífero está respirando.";
};

const Dog = Object.create(Mammal);

Dog.species = "Cachorro";

Dog.bark = function () {
    return "Au au!";
};

const myPet = Object.create(Dog);

myPet.name = "Rex";

console.log(myPet.name);
console.log(myPet.species);
console.log(myPet.hasFur);

console.log(myPet.eat());
console.log(myPet.bark());
console.log(myPet.breathe());

console.log(Object.getPrototypeOf(myPet) === Dog);
console.log(Object.getPrototypeOf(Dog) === Mammal);
console.log(Object.getPrototypeOf(Mammal) === Animal);

console.log(Dog.isPrototypeOf(myPet));
console.log(Mammal.isPrototypeOf(myPet));
console.log(Animal.isPrototypeOf(myPet));



//2
// ==========================================
// 2. person → employee
// ==========================================

const person = {
    name: "João",

    introduce() {
        return `Olá, meu nome é ${this.name}.`;
    }
};


const employee = Object.create(person);

employee.job = "Desenvolvedor";

employee.introduce = function () {

    const parentIntroduction =
        Object.getPrototypeOf(this).introduce.call(this);

    return `${parentIntroduction} Eu trabalho como ${this.job}.`;
};


// ==========================================
// Testando
// ==========================================

console.log(employee.introduce());


//3
// ==========================================
// 3. Vehicle
// ==========================================

const Vehicle = {
    brand: "Veículo"
};


// Criando os objetos ANTES de start()
const car = Object.create(Vehicle);
car.model = "Civic";

const motorcycle = Object.create(Vehicle);
motorcycle.model = "CB 500";

const truck = Object.create(Vehicle);
truck.model = "Volvo";


console.log(car.start);
console.log(motorcycle.start);
console.log(truck.start);


// ==========================================
// Adicionando start() DEPOIS
// ==========================================

Vehicle.start = function () {
    return `${this.model} está ligado.`;
};


// ==========================================
// Agora todos possuem acesso ao método
// ==========================================

console.log(car.start());
console.log(motorcycle.start());
console.log(truck.start());


//4

// ==========================================
// 4. isVehicleType()
// ==========================================

function isVehicleType(object) {
    return Vehicle.isPrototypeOf(object);
}

const carro = Object.create(Vehicle);

const electriccarro = Object.create(carro);

const animal = {
    name: "Rex"
};

console.log(isVehicleType(carro));
// true

console.log(isVehicleType(electriccarro));
// true

console.log(isVehicleType(animal));
// false


//5
// ==========================================
// 5. MIXINS
// ==========================================

const canConnect = {
    connect() {
        return "Dispositivo conectado.";
    }
};

const canUpdate = {
    update() {
        return "Dispositivo atualizado.";
    }
};

const canReset = {
    reset() {
        return "Dispositivo resetado.";
    }
};
const smartDevice = {
    name: "Smart TV"
};
Object.assign(
    smartDevice,
    canConnect,
    canUpdate,
    canReset
);
console.log(smartDevice.connect());
console.log(smartDevice.update());
console.log(smartDevice.reset());
