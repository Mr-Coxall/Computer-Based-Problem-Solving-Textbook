# Computer-Based-Problem-Solving

[![Mr Coxall's Super Linter](https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook/workflows/Mr%20Coxall's%20Super%20Linter/badge.svg)](https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook/actions)

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](./LICENSE)

![GitHub repo size](https://img.shields.io/github/repo-size/mr-coxall/Computer-Based-Problem-Solving-Textbook.svg)
![GitHub issues](https://img.shields.io/github/issues/mr-coxall/Computer-Based-Problem-Solving-Textbook.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/mr-coxall/Computer-Based-Problem-Solving-Textbook.svg)
![GitHub forks](https://img.shields.io/github/forks/mr-coxall/Computer-Based-Problem-Solving-Textbook.svg?style=social)

The online version can be found at:

[https://mr-coxall.github.io/Computer-Based-Problem-Solving-Textbook/](https://mr-coxall.github.io/Computer-Based-Problem-Solving-Textbook/)

## Start Dev Server in Codespaces

```bash
npm run start -- --host 0.0.0.0
```

## To build the Text in Codespaces

```bash
GIT_USER=mr-coxall yarn deploy
```


## Site

This site is built using [Docusaurus 2](https://docusaurus.io/), a modern static site generator.

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## GitHub permissions need to be set before Deploy or Commiting changes

To push code back to Git, remember you need a new SSH key!
- git config --global user.name "Mr Coxall"
- git config --global user.email "mr.coxall@mths.ca"
- ssh-keygen
- cat ~/.ssh/id_rsa.pub
- eval "$(ssh-agent -s)"
- ssh-add ~/.ssh/id_rsa
- sudo chown -R codespace .git

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the site and push to the `gh-pages` branch.

