// 1. Crie o mesmo objeto `product` (name, price, category) usando
//    as 4 formas: literal, new Object(), factory function e Object.create().
//    Compare sintaxe e facilidade de reutilização.

// 2. Implemente uma factory `createUser(name, email, role)` que retorna
//    objetos com método `displayData()`. Crie 3 usuários diferentes
//    e invoque o método de cada um.

// 3. Crie um objeto `account` com `balance` privado (usando closure ou WeakMap).
//    Adicione getter `balance` e métodos `deposit(amount)` e `withdraw(amount)`.
//    O saldo nunca pode ser negativo.

// 4. Use Object.defineProperty() para criar um objeto `config` onde:
//    - `version` é somente leitura (writable: false)
//    - `apiKey` não aparece em for...in (enumerable: false)
//    - `mode` não pode ser deletado (configurable: false)

// 5. (Extra) Refatore os dados do cliente para usar optional chaining e
//    nullish coalescing. Teste com objetos que possuem e que não possuem
//    as propriedades aninhadas.

//1

//literal
 const product= {
    name: "livro",
    price: 50,
    category: "livros"
 }
console.log(product);

//object.creat()
const productPrototype = {
    showProduct() {
        return `${this.name} - R$ ${this.price}`;
    }
};
 const product1= Object.create(productPrototype);
 product1.name = "Blusa";
 product1.price = 14.55;
 product1.category = "Moda";
 console.log(product1.showProduct());


 //nrew Object()

const product2= new Object();
 product2.name = "Cama";
 product2.price = 514.55;
 product2.category = "Móveis";
  console.log(product2);


  //factory function
  function creatProduct(nome, price, category){
    return{
        name: name,
        price: price,
        category: category
    };
  }


  const product3 = creatProduct(
"Teclado mecânico",
145.69,
"Eletrônicos"
  );
    console.log(product3);


//2

function createUser(name, email, role){
    return{
        name: name,
        email: email,
        role: role,

        displayData(){
            return `Nome: ${this.name}, Email: ${this.email}, Cargo: ${this.role}`;
        }
    }
}

const user1 = createUser(
    "João",
    "joao@email.com",
    "Administrador"
);

const user2 = createUser(
    "Maria",
    "maria@email.com",
    "Desenvolvedora"
);

const user3 = createUser(
    "Pedro",
    "pedro@email.com",
    "Designer"
);

// Invocando o método de cada usuário
console.log(user1.displayData());
console.log(user2.displayData());
console.log(user3.displayData());


//3
function  createAccount(initialBalance){
let balance = initialBalance;
return{
    get balance(){
        return  balance;
    },

    deposit (amount){
        if(amount > 0){
            balance += amount;
        }
    },

    withdraw(amount){
        if(amount> 0 && amount <=balance){
            balance  -= amount;
        }
    }
};


}
const account = createAccount(1000);

console.log(account.balance); // 1000

account.deposit(500);
console.log(account.balance); // 1500

account.withdraw(300);
console.log(account.balance); // 1200

account.withdraw(2000);
console.log(account.balance); //



//4
const config= {};

Object.defineProperty(config, "version", {
    value: "1.0.0",
    writable: false,
    enumerable: true,
    configurable: true
});

Object.defineProperty(config, "apiKey", {
    value: "ABC123",
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(config, "mode", {
    value: "production",
    writable: true,
    enumerable: true,
    configurable: false
});

console.log(config.version);
console.log(config.apiKey);
console.log(config.mode);


//5
const client1 = {
    name: "João",
    address: {
        city: "Porto Alegre",
        street: "Rua Central"
    }
};

const client2 = {
    name: "Maria"
};

const client3 = {
    name: "Pedro",
    address: {
        city: "Canoas"
    }
};

// Cliente com todas as informações
console.log(
    client1.address?.city ?? "Cidade não informada"
);

// Cliente sem address
console.log(
    client2.address?.city ?? "Cidade não informada"
);

// Cliente com address e city
console.log(
    client3.address?.city ?? "Cidade não informada"
);


