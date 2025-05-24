# Escola Avanço Blogging - Projeto Full Stack

 ## Introdução
No cenário educacional atual, a falta de ferramentas adequadas dificulta a publicação e o compartilhamento de conteúdos educacionais de forma centralizada e acessível. A aplicação Escola Avanço foi desenvolvida para enfrentar esse desafio, permitindo que professores da rede pública publiquem aulas de maneira intuitiva e tecnológica, enquanto os alunos têm acesso fácil e organizado a esses materiais.

A aplicação utiliza uma arquitetura em MVC no back-end, implementada com Node.js, MongoDB, e comunicação via REST APIs. Além disso, conta com containerização via Docker e automação de CI/CD com GitHub Actions, garantindo um ambiente escalável e consistente.

 ## Para iniciar o projeto
 - Clone o repositório na sua máquina
 - Instale as dependências do back-end e do front-end separadamente, com o comando `npm install`
 - Suba os servidores separadamente também, com `docker compose up` para o back-end (rodará na porta 3030) e `npm start` para o front-end (rodará na porta 3000)
 - Importe o arquivo `techChallenge..papeis.json` no banco de dados para obter os IDs

## Arquitetura do projeto

### Back-end
Você pode conferir uma documentação detalhada da API da Escola Avanço no [repositório do back-end](https://github.com/liviagcmoura/tech-challenge02).

### Front-end

Este projeto foi desenvolvido como parte do Tech Challenge 03 da pós-graduação em Full Stack Development da FIAP. O foco principal foi a aplicação dos conceitos básicos de React, incluindo:

- Componentes Funcionais
- React Hooks
- Styled Component
- Props e Estados
- Conexão com API em Node.js

A estrutura do projeto segue uma organização modular, facilitando a manutenção e escalabilidade:

```plaintext
frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── rotas/               # Páginas principais
│   ├── servicos/            # Serviços de API
│   └── index.js             # Ponto de entrada
├── public/
│   └── index.html           # HTML principal
└── package.json             # Dependências e scripts
```

## Fluxo da aplicação

![Fluxo da aplicação](https://github.com/user-attachments/assets/df3f02c1-77a1-4c44-9b42-b6167d03cb1b)

> **Atenção:** Usuários cujo papel é `Aluno` não possuem acesso à página "Admin", ou seja, as funcionalidades de criar, editar ou deletar aulas são restritas a Professores.

> *A página de blogging não oferece as funcionalidades de usuário, como criar, editar ou deletar. Então, recomendamos criá-los via API, usando o Postman, por exemplo, ou diretamente no banco de dados. Para isso, envie um nome de usuário (`nome`), senha (`password`) e ID do papel de Aluno ou Professor (`role`), listados no JSON de papéis.*

## Desafios de desenvolvimento
- **Conexão com API:** Enfrentamos dificuldades na configuração do Cors no back-end para podermos acessar a API pelo front-end. Demoramos a entender que o problema era a ordem correta do script de entrada das rotas usando o Cors, o que exigiu bastante pesquisa pelo Stack Overflow, ajuda de IA e de pessoas mais experientes.
- **Estilização:** Os membros do grupo possuíam pouca familiaridade com CSS, também exigindo bastante pesquisa para manter um estilo coerente nas páginas, além de funcional.
- **Padrões de projeto:** Desenvolver em grupo apresenta um desafio para manter a uniformidade do código. Também por conta do tempo, não conseguimos refatorar todo o projeto para deixá-lo mais organizado, o que acabou resultando em muitas duplicações de código e algumas incoerências de arquitetura. Resolver esses problemas será o nosso foco após a entrega.

Esses desafios foram muito importantes para o desenvolvimento de cada membro da equipe ao nos colocar diante de situações próximas da realidade do dia a dia de uma pessoa desenvolvedora Full Stack. Saímos desse Tech Challenge mais preparados para lidar com alguns problemas comuns e com mais noção dos pontos que precisamos estudar e praticar mais.
