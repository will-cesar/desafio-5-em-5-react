# Desafio 5 em 5 com React.Js

> Repositório com 5 projetos em React.Js + TypeScript

```
https://youtube.com/playlist?list=PL_kvSTSEFm2CwHCtvTk0llGDvM0L2jx3O
```

> ## Índice
- [Sobre](#sobre)
- [Projeto 1 - Lista de Tarefas (todo)](#projeto-1)
- [Projeto 2 - Sistema de finanças pessoais (expense-tracker)](#projeto-2)
- [Projeto 3 - Galeria de fotos (gallery)](#projeto-3)
- [Projeto 4 - Jogo RPG (rpg)](#projeto-4)

> ## <a name="sobre"></a> Sobre
- Repositório com 5 projetos diferentes utilizando o React.Js com o TypeScript

> ## <a name="projeto-1"></a> Projeto 1 - Lista de Tarefas (todo)
- Projeto que consiste em ser uma simples to-do list de tarefas
- É possível criar uma tarefa, finalizar uma tarefa e listar todas elas
- Uso do `styled-components` para aplicar estilos nos componentes

#### Dependências
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) - Pacote de tipagens para o styled-components
- [styled-components](https://styled-components.com) - Lib para React e React Native que permite estilizar componentes na aplicação
- [typescript](https://www.typescriptlang.org) - Superset de JavaScript que permite a utilização de tipagens e outros recursos

#### Run App
```
npm start
```

> ## <a name="projeto-2"></a> Projeto 2 - Sistema de finanças pessoais (expense-tracker)
- Projeto de gerenciamento das contas pessoais
- É possível exibir as contas do mês, receitas e despesas
- Cada conta é categorizada por data, categoria, título e valor
- Uso de datepicker e validações de formulários
- Uso do `styled-components` para aplicar estilos nos componentes

#### Dependências
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) - Pacote de tipagens para o styled-components
- [styled-components](https://styled-components.com) - Lib para React e React Native que permite estilizar componentes na aplicação
- [typescript](https://www.typescriptlang.org) - Superset de JavaScript que permite a utilização de tipagens e outros recursos

#### Run App
```
npm start
```

> ## <a name="projeto-3"></a> Projeto 3 - Galeria de fotos (gallery)
- Projeto de galeria de imagens
- Nele é possível adicionar e exibir imagens
- Projeto integrado com o `firebase`
- O firebase foi utilizado para armazenar as imagens (Storage)
- Utilização do `.env`
- Uso do `styled-components` para aplicar estilos nos componentes

#### Dependências
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) - Pacote de tipagens para o styled-components
- [@types/uuid](https://www.npmjs.com/package/@types/uuid) - Pacote de tipagens da lib uuid
- [firebase](https://firebase.google.com/?hl=pt) - Plataforma de desenvolvimento de aplicativos móveis da google
- [styled-components](https://styled-components.com) - Lib para React e React Native que permite estilizar componentes na aplicação
- [typescript](https://www.typescriptlang.org) - Superset de JavaScript que permite a utilização de tipagens e outros recursos
- [uuid](https://www.npmjs.com/package/uuid) - Lib que gera hashs aleatórios

#### Pré configurações do Firebase
- Para funcionar corretamente, é necessário preencher as variáveis de ambiente que pertencem ao firebase
- O arquivo modelo se encontra na raiz do projeto com o nome de `.env.exemple`
- É necessário criar um arquivo chamado `.env.local`, copiar as chaves do arquivo modelo e preencher as mesmas com os dados correspondentes a cada chave
- Dentro do storage do Firebase foi criado uma pasta chamada **images**, onde ficarão armazenadas as imagens, assim sendo essa pasta a principal referência de onde será guardada as imagens

#### Run App
```
npm start
```

> ## <a name="projeto-4"></a> Projeto 4 - Jogo RPG (rpg)
- Jogo RPG feito em React.Js
- Nele é possível andar para as 4 direções utilizando as teclas A, S, D, W e as setas
- Há obstáculos onde o personagem não pode ultrapassar 
- Uso do `styled-components` para aplicar estilos nos componentes
- Criação de `hooks customizados`

#### Dependências
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) - Pacote de tipagens para o styled-components
- [styled-components](https://styled-components.com) - Lib para React e React Native que permite estilizar componentes na aplicação
- [typescript](https://www.typescriptlang.org) - Superset de JavaScript que permite a utilização de tipagens e outros recursos

#### Run App