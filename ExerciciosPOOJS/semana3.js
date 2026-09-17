
// 2. Crie `user` com birthdate (new Date()), calculateAge() e uma
//    propriedade `undefined`. Clone com JSON.parse(JSON.stringify())
//    e identifique o que foi perdido.

// 3. Implemente os 3 métodos de clonagem (spread, structuredClone, JSON)
//    em objetos com diferentes características. Monte uma tabela comparativa.

// 4. Crie `cloneWithoutSensitive(object)` que faz deep copy mas REMOVE
//    propriedades como `password`, `ssn`, `creditCard` antes de retornar.

//1
const pessoa1 = {
    name: "João",
    age: 25,
    address: {
        street: "Rua Central",
        city: "Porto Alegre"
    }
};

// Shallow copy
const shallowCopy = { ...pessoa1 };

console.log("Pessoa e shallow são iguais?");
console.log(pessoa1 === shallowCopy); // false

console.log("Os addresses são iguais?");
console.log(pessoa1.address === shallowCopy.address); // true

// Alterando a cidade da shallow copy
shallowCopy.address.city = "Canoas";

console.log("Cidade da shallow copy:", shallowCopy.address.city);
// Canoas

console.log("Cidade da pessoa original:", pessoa1.address.city);
// Canoas


// Criando novamente a pessoa original
const pessoa2 = {
    name: "Rosa",
    age: 25,
    address: {
        street: "Rua fim",
        city: "Porto de galinhas"
    }
};

// Deep copy
const deepCopy = structuredClone(pessoa2);

console.log("Pessoa e deep são iguais?");
console.log(pessoa2 === deepCopy); // false

console.log("Os addresses são iguais?");
console.log(pessoa2.address === deepCopy.address); // false

// Alterando a cidade da deep copy
deepCopy.address.city = "Canoas";

console.log("Cidade da deep copy:", deepCopy.address.city);
// Canoas

console.log("Cidade da pessoa original:", pessoa2.address.city);
// Porto Alegre

//2
const user = {
    name: "João",
    
    birthdate: new Date("2000-05-15"),

    calculateAge() {
        const today = new Date();

        return today.getFullYear() - this.birthdate.getFullYear();
    },

    phone: undefined
};

// Objeto original
console.log("===== OBJETO ORIGINAL =====");

console.log("Nome:", user.name);
console.log("Data de nascimento:", user.birthdate);
console.log("É Date?", user.birthdate instanceof Date);
console.log("Idade:", user.calculateAge());
console.log("Telefone:", user.phone);


// Fazendo o clone com JSON
const userClone = JSON.parse(JSON.stringify(user));


// Objeto clonado
console.log("===== OBJETO CLONADO =====");

console.log("Nome:", userClone.name);
console.log("Data de nascimento:", userClone.birthdate);
console.log("É Date?", userClone.birthdate instanceof Date);
console.log("Idade:", userClone.calculateAge);
console.log("Telefone:", userClone.phone);


// Comparando o original com o clone
console.log("===== COMPARAÇÃO =====");

console.log("birthdate original:", user.birthdate);
console.log("birthdate clone:", userClone.birthdate);

console.log("calculateAge original:", user.calculateAge);
console.log("calculateAge clone:", userClone.calculateAge);

console.log("phone original:", user.phone);
console.log("phone clone:", userClone.phone);


//3
// ==========================================
// 1. OBJETO SIMPLES
// ==========================================

const simpleObject = {
    name: "João",
    age: 25
};

const simpleSpread = { ...simpleObject };
const simpleStructured = structuredClone(simpleObject);
const simpleJSON = JSON.parse(JSON.stringify(simpleObject));

console.log("OBJETO SIMPLES");
console.log(simpleSpread);
console.log(simpleStructured);
console.log(simpleJSON);


// ==========================================
// 2. OBJETO COM OBJETO ANINHADO
// ==========================================

const nestedObject = {
    name: "Maria",
    address: {
        city: "Porto Alegre",
        street: "Rua Central"
    }
};

// Spread
const nestedSpread = { ...nestedObject };

// structuredClone
const nestedStructured = structuredClone(nestedObject);

// JSON
const nestedJSON = JSON.parse(JSON.stringify(nestedObject));


// Alterando o objeto interno da cópia feita com spread
nestedSpread.address.city = "Canoas";

console.log("OBJETO ORIGINAL DEPOIS DO SPREAD:");
console.log(nestedObject.address.city);
// Canoas

// Alterando o objeto interno da cópia feita com structuredClone
nestedStructured.address.city = "Gravataí";

console.log("OBJETO ORIGINAL DEPOIS DO STRUCTURED CLONE:");
console.log(nestedObject.address.city);
// Canoas

// Alterando o objeto interno da cópia feita com JSON
nestedJSON.address.city = "Viamão";

console.log("OBJETO ORIGINAL DEPOIS DO JSON:");
console.log(nestedObject.address.city);
// Canoas


// ==========================================
// 3. OBJETO COM DATE E UNDEFINED
// ==========================================

const specialObject = {
    name: "Pedro",
    birthdate: new Date("2000-05-15"),
    phone: undefined
};

// Spread
const specialSpread = { ...specialObject };

// structuredClone
const specialStructured = structuredClone(specialObject);

// JSON
const specialJSON = JSON.parse(JSON.stringify(specialObject));

console.log("OBJETO COM DATE E UNDEFINED");

console.log("Spread:");
console.log(specialSpread);
console.log(specialSpread.birthdate instanceof Date);
console.log(specialSpread.phone);

console.log("Structured Clone:");
console.log(specialStructured);
console.log(specialStructured.birthdate instanceof Date);
console.log(specialStructured.phone);

console.log("JSON:");
console.log(specialJSON);
console.log(specialJSON.birthdate instanceof Date);
console.log(specialJSON.phone);


// ==========================================
// 4. COMPARANDO OS OBJETOS
// ==========================================

console.log("COMPARAÇÃO DE REFERÊNCIAS");

console.log(
    nestedObject === nestedSpread
);
// false

console.log(
    nestedObject.address === nestedSpread.address
);
// true

console.log(
    nestedObject.address === nestedStructured.address
);
// false

console.log(
    nestedObject.address === nestedJSON.address
);
// false




//4
function cloneWithoutSensitive(object) {
    // Faz uma cópia profunda
    const clone = structuredClone(object);

    // Remove os dados sensíveis da cópia
    delete clone.password;
    delete clone.ssn;
    delete clone.creditCard;

    return clone;
}


// Objeto original
const usuario = {
    name: "João",
    email: "joao@email.com",
    password: "123456",
    ssn: "123-45-6789",
    creditCard: "1234-5678-9012-3456",

    address: {
        street: "Rua Central",
        city: "Porto Alegre"
    }
};


// Criando a cópia sem os dados sensíveis
const safeUser = cloneWithoutSensitive(usuario);

console.log("Original:");
console.log(usuario);

console.log("Cópia segura:");
console.log(safeUser);
