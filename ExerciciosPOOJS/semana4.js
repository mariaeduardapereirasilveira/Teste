// 1. Crie `const user = {name: "Ana"}`. Modifique propriedades,
//    adicione novas, delete existentes. Explique por que `const`
//    não impede mutação do objeto.

// 2. Crie um objeto `config` e aplique freeze, seal, preventExtensions.
//    Monte uma tabela comparando o que cada um permite/bloqueia.

// 3. Implemente `deepFreeze(object)` que congela o objeto e TODOS os
//    seus objetos aninhados recursivamente. Teste com 3 níveis.

// 4. Crie objetos representando perfis de usuário:
//    `admin` (pode tudo), `editor` (seal — modifica, não adiciona),
//    `reader` (freeze — somente leitura).


//1
const user = {
    name: "Ana"
};

// Modificando uma propriedade existente
user.name = "Maria";

// Adicionando uma nova propriedade
user.age = 25;

// Adicionando outra propriedade
user.email = "maria@email.com";

// Deletando uma propriedade
delete user.age;

console.log(user);


//2
const configFreeze = {
    mode: "development",
    version: "1.0"
};

const configSeal = {
    mode: "development",
    version: "1.0"
};

const configPrevent = {
    mode: "development",
    version: "1.0"
};


// FREEZE
Object.freeze(configFreeze);


// SEAL
Object.seal(configSeal);


// PREVENT EXTENSIONS
Object.preventExtensions(configPrevent);
configFreeze.mode = "production";

configFreeze.newProperty = "teste";

delete configFreeze.version;

console.log(configFreeze);

configSeal.mode = "production";

configSeal.newProperty = "teste";

delete configSeal.version;

console.log(configSeal);
configPrevent.mode = "production";

configPrevent.newProperty = "teste";

delete configPrevent.version;

console.log(configPrevent);

/*
Operação	freeze()	seal()	preventExtensions()
Modificar propriedade existente	❌	✅	✅
Adicionar propriedade	❌	❌	❌
Deletar propriedade	❌	❌	✅
Impedir novas propriedades	✅	✅	✅*/

//3



function deepFreeze(object) {

    // Pega todos os valores das propriedades
    const properties = Object.values(object);

    // Percorre as propriedades
    for (const value of properties) {

        // Verifica se o valor é um objeto
        if (value !== null && typeof value === "object") {

            // Congela o objeto interno recursivamente
            deepFreeze(value);
        }
    }

    // Congela o objeto atual
    return Object.freeze(object);
}




const config = {
    app: {
        name: "Minha aplicação",

        database: {
            host: "localhost",

            credentials: {
                user: "admin",
                password: "123456"
            }
        }
    }
};




deepFreeze(config);




console.log("config:", Object.isFrozen(config));

console.log(
    "app:",
    Object.isFrozen(config.app)
);

console.log(
    "database:",
    Object.isFrozen(config.app.database)
);

console.log(
    "credentials:",
    Object.isFrozen(
        config.app.database.credentials
    )
);



// Nível 1
config.app.name = "Outra aplicação";

// Nível 2
config.app.database.host = "192.168.0.1";

// Nível 3
config.app.database.credentials.password = "novaSenha";



console.log("Nome:", config.app.name);

console.log(
    "Host:",
    config.app.database.host
);

console.log(
    "Password:",
    config.app.database.credentials.password
);


//4
// ==========================================
// ADMIN
// Pode tudo
// ==========================================

const admin = {
    name: "João",
    role: "admin"
};


// Pode modificar
admin.name = "Carlos";

// Pode adicionar
admin.email = "carlos@email.com";

// Pode deletar
delete admin.role;

console.log("ADMIN:");
console.log(admin);


// ==========================================
// EDITOR
// Pode modificar
// Não pode adicionar nem deletar
// ==========================================

const editor = {
    name: "Maria",
    role: "editor"
};

Object.seal(editor);


// Pode modificar uma propriedade existente
editor.name = "Mariana";

// Não pode adicionar
editor.email = "mariana@email.com";

// Não pode deletar
delete editor.role;

console.log("EDITOR:");
console.log(editor);


// ==========================================
// READER
// Somente leitura
// ==========================================

const reader = {
    name: "Pedro",
    role: "reader"
};

Object.freeze(reader);


// Não pode modificar
reader.name = "Paulo";

// Não pode adicionar
reader.email = "paulo@email.com";

// Não pode deletar
delete reader.role;

console.log("READER:");
console.log(reader);
