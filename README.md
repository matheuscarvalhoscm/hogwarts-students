# Esse é um exercício para o conteúdo sobre Context API.

## Antes de iniciar

Crie um fork desse projeto e para isso siga [esse tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o npm install.

Você pode realizar os exercícios na branch main, ou pode criar uma nova branch para resolução dos exercícios. Fica a seu critério.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a main (caso tenha criado uma nova branch), sinta-se a vontade!

**Atenção**! Quando for criar o PR você irá se deparar com essa tela:

![PR do Projeto](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![PR do Projeto](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/change-base.png)

Mudando a base do repositório

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: antonio/TicTacToe. Depois desse passo a página deve ficar assim:

![PR do Projeto](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/after-change.png)

Após mudança

Agora basta criar o PULL REQUEST clicando no botão Create Pull Request.

Para cada PR realize esse processo.

## COMEÇANDO OS EXERCÍCIOS

Neste exercício você irá refatorar uma ~~Potterdex~~ uma aplicação que renderiza cards com as informações dos estudantes da Escola de Mágia e Bruxaria de Hogwarts. Pense nela como se fosse o Mapa do Maroto, só que com um pouco menos de tecnologia  ~~e magia~~ (quer algo mais tecnológico usar um mapa de papel pardo pra rastrear pessoas?). 

Utilize todos os conhecimentos sobre React e Context API adiquiridos até aqui. Bom exercício.

---

### Exercício 1

Crie um Contexto para a aplicação

* A aplicação está sofrendo com um pequeno  *prop drilling* para renderizar os cards do estudantes. Crie um contexto, um Provider e um Consumer para evitar esse problema.

---
### Exercício 2

Renderize os cards para todos os estudantes, utlilizando o componente StudentsCards.

* Utilize o Contexto que você criou no exercício anterior.

---
### Exercício 3

Você deve ter notado que alguns estudantes esqueceram de enviar uma foto para os registros de Hogwarts. Para os alunos que não tem uma imagem, renderize o brazão da casa à qual eles pertencem.

*Você pode encontrar os brazões das casas na pasta **images***.

---
### Bônus

Filtre os estudantes pela casa de Hogwarts a qual pertencem.

- Os botões para os filtros já existem na aplicação, porém eles ainda não tem funcionalidade. Essa será sua tarefa. ***Dica: lembre-se que o contexto pode ser utilizado em componentes funcionais e de classe. O this.state pode vir a calhar.***