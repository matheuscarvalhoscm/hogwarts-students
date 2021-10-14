# Esse é um exercício para o conteúdo sobre Context API.

## Antes de iniciar

Crie um fork desse projeto e para isso siga [esse tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o npm install.

Vá para a branch main do seu projeto e execute o comando:

git branch
Verifique se as seguintes branchs apareceram:

- main
- gabarito

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção**! Quando for criar o PR você irá se deparar com essa tela:

![](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/example-pr.png)

PR do exercício

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/change-base.png)

Mudando a base do repositório

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: antonio/TicTacToe. Depois desse passo a página deve ficar assim:

![](https://github.com/tryber/exercise-contextAPI-refactoring/raw/master/images/after-change.png)

Após mudança

Agora basta criar o PULL REQUEST clicando no botão Create Pull Request.

Para cada PR realize esse processo.

## COMEÇANDO OS EXERCÍCIOS

### Exercício 1

Crie um Contexto para a aplicação

* A aplicação está sofrendo com o *prop drilling* para renderizar os cards do estudantes. Crie um contexto, um Provider e um Consumer para evitar esse problema.
* Aproveite transformar os componentes existentes em componentes funcionais =)

---
### Exercício 2

Renderize os cards para todos os estudantes, utlilizando o componente Cards.

* Utilize o Contexto que você criou no exercício anterior.

---
### Exercício 3

Você deve ter notado que alguns estudantes esqueceram de enviar a foto 3x4 para manter no registro de Hogwarts. Para os alunos que não tem uma imagem, renderize o brazão da casa a qual eles pertencem.

*Você pode encontrar os brazões das casas na pasta **images***

---
### Bônus

Utilize o componente HouseButtons para filtrar os estudantes pela casa de Hogwarts a qual pertencem.

- Os botões já existem na aplicação, porém eles ainda não tem funcionalidade. Essa será sua tarefa. Lembre-se de atualizar o Contexto com as informações filtradas.