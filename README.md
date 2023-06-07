# Aula 01 Teste unitários ⚙️
Aula 01 de testes unitários exemplos de funções com testes, tutorial de instalação.

material da aula: [Link](https://docs.google.com/presentation/d/1ND5ZDO-pgHf-WDv96PQ4QSlfUoKI3u7PBdFw7qBJS-Q/edit?usp=sharing)

## Como utilizar o jest neste repo
1. Rode o comando:
```
npm i
```
Irá instalar 
- @jest/globals (necessário para usar o Jest com TS)
- @types/jest (tipagens do Jest para não necessitar o import em cada arquivo)
- jest 
- ts-jest (transpilador TS para JS)

2. Confira se você possui um arquivo jest.config.js com as seguintes configuraçõeS:
```
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

3. Também é necessário o arquivo tsconfig.json para sumir um warning. Este deve estar neste formato:
```
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}

```
