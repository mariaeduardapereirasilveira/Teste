svg:
 A regra geral para arquivos SVG é que os elementos posteriores são renderizados sobre os anteriores. Quanto mais abaixo um elemento estiver na tabela, mais visível ele será.
 

 Animaçõs CSS:
 Configurando a animação
Para criar uma sequência de animação CSS, você estiliza o elemento que deseja animar com a propriedade animation ou suas sub-propriedades. Isso permite que você configure a sincronização da animação, bem como outros detalhes de como a de como a sequência de animação deveria progredir. Isso não configura a aparência atual da animação, que é feita usando a regra com parênteses (at-rule) @keyframes como descrito em Defining the animation sequence using keyframes abaixo.

As sub-propriedades da propriedade animation são:

animation-delay
Configura o delay entre o tempo em que o elemento é carregado e o inicio da sequência de animação.

animation-direction
Configura se a animação deve ou nao alternar a direção em cada execução durante a sequência ou voltar ao ponto inicial e se repetir.

animation-duration
Configura o tempo que uma animação deveria levar para completar um ciclo.

animation-iteration-count
Configura o numero de vezes que uma animação deveria se repetir; você pode especificar infinito para repetir a animação indefinidamente.

animation-name
Especifica o nome da regra com parênteses (at-rule) @keyframes at-rule descrevendo os keyframes da animação.

animation-play-state
Permite voce pausar e resumir a sequência da animação.

animation-timing-function
Configura a sincronização da animação; que é, como a animação transita por keyframes, por estabilizar curvas de aceleração.

animation-fill-mode
Configura que valores são aplicados pela animação antes e depois de se executar.

[ Arquivo.scss ]  ──( Compilador )──>  [ Arquivo.css ]  ──>  [ Seu HTML ]
(Onde você escreve)                     (Gerado automaticamente)     (Lê apenas o CSS)
[text](https://codepen.io/timothyguo/pen/jbarzP)


Como fazer essa conversão (Compilação)A forma mais fácil e rápida para quem está começando é usar o editor de código VS Code:Abra o VS Code.Vá até a aba de Extensões (Ctrl + Shift + X).Procure por Live Sass Compiler e clique em Instalar.Abra a pasta do seu projeto, crie o arquivo estilo.scss e escreva seu código.Na barra inferior do VS Code, clique no botão 👁️ Watch Sass.Pronto! Toda vez que você salvar o arquivo .scss, a extensão criará (ou atualizará) o arquivo .css na mesma pasta instantaneamente.

Documentação animações css:
[text](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Guides/Animations/Using)