/*A partir dos enunciados abaixo e dos conceitos estudados até o momento, elabore os algoritmos e
faça a codificação utilizando a linguagem de programação JavaScript.
1. Crie uma página contendo um elemento <h1> com o texto "Minha Página" e três parágrafos com
diferentes textos. Faça as ações no código para:
a. Localizar o <h1> utilizando getElementById().
b. Alterar conteúdo do <h1> para "Minha Primeira Página Interativa".
c. Alterar a cor do texto do <h1> para azul utilizando a propriedade style.
d. Localizar todos os parágrafos utilizando getElementsByTagName().
e. Exiba no console a quantidade de parágrafos encontrados.
f. Alterar os parágrafos colocando cor de fundo preto, texto na cor verde e padding de 20px.
2. Crie uma página contendo cinco parágrafos. Dois desses parágrafos coloque uma classe chamada
destaque e, nos outros três, a classe chamada normal. No CSS crie as duas classes, conforme
abaixo:
.destaque → fundo amarelo;
.normal → fundo cinza.
Agora, utilizando JavaScript:
a. Localize todos os elementos da classe normal.
b. Remova a classe normal desses elementos.
c. Adicione a classe destaque a eles.
3. Crie uma página contendo uma lista <ul> com três tarefas:
• Estudar JavaScript
• Fazer os exercícios
• Revisar o conteúdo
Utilizando JavaScript:
a. Localize a lista.
b. Crie um novo elemento <li>.
c. Adicione o texto "Praticar manipulação do DOM" ao novo elemento.
d. Insira o novo item no final da lista.
e. Crie outro <li> com o texto "Revisar os exemplos da aula".
f. Insira esse item no início da lista.
g. Altere o estilo da lista para square.
4. Crie uma página que contenha uma <div> com o ID conteudo. Utilizando JavaScript, crie
dinamicamente dentro dessa <div>:
a. Um <h2> com o texto "Curso de JavaScript".
b. Um <p> com o texto "Aprendendo a manipular o DOM.".
c. Um botão <button> com o texto "Continuar".

Utilize como estilo CSS para a <div>, a formatação abaixo:
background-color: lightgray;
padding: 20px;
Os três elementos deverão ser criados utilizando createElement() e inseridos no DOM utilizando
métodos de inserção. ATENÇÃO: não utilize innerHTML para criar os elementos.
5. Crie uma página contendo uma lista não ordenada com cinco itens de produtos:
• Notebook
• Teclado
• Mouse
• Monitor
• Webcam
Utilizando JavaScript:
a. Localize a lista.
b. Localize o item "Mouse".
c. Remova esse item da página utilizando remove().
d. Em seguida, remova também o item "Webcam".
Faça a seleção dos elementos utilizando querySelector().
6. Crie uma página contendo:
<h1>Área do aluno</h1>
<p id="mensagem">Conteúdo disponível em breve.</p>
Utilizando JavaScript:
a. Crie um novo elemento <h2>.
b. Defina seu conteúdo como "Bem-vindo ao curso!".
c. Substitua o elemento <p> pelo novo <h2>.
d. Ao final, a página deverá apresentar o <h1> seguido do novo <h2>.
DICA: Utilize o método replaceWith().
7. Crie uma página contendo: uma imagem, um link e um título <h1>. Utilizando JavaScript:
a. Altere o src da imagem para outra imagem.
b. Altere o href do link para outro endereço.
c. Altere o texto apresentado pelo link.
d. Crie o id titulo para o <h1>.
8. Criar uma pequena página utilizando JavaScript para construir parte de sua estrutura
dinamicamente. No HTML, crie apenas uma <div> com o ID app. Todo o conteúdo a seguir deverá
ser criado utilizando JavaScript:
a. um <h1> com o título "Minha lista de filmes";
b. três cartões <div>, cada um representando um filme;
c. dentro de cada cartão:
i. um <h2> com o nome do filme;
ii. um <p> com uma breve descrição;
d. uma classe CSS chamada .filme deverá ser adicionada aos cartões utilizando
classList.add().
EXTRA: Depois de montar a página, utilize JavaScript para: adicionar um quarto filme; remover um
dos filmes existentes; alterar o título da página; e alterar a classe de um dos cartões.*/