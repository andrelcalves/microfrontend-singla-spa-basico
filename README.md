# microfrontend-singla-spa-basico
Um exemplo simples de microfrontend com framework single spa (react + vue), para esse exemplo serão criados dois projetos, um contador em react e um todo list em vue.

### os projetos foram criados na pasta project
* counter   (em react)
* todo-list (em vue)


Esse exemplo foi feito com base no video de Matheus Castiglioni, disponível em .

https://www.youtube.com/watch?v=who7iqEIpwU

Na pasta raiz microfrontend-singla-spa-basico foi transformado em um projeto npm, e adicionar dependencias do single-spa e os helpers single-spa-react e single-spa-vue.
``` npm init -y ```
``` npm install single-spa single-spa-react single-spa-vue ```
``` npm i -D babel-loader clean-webpack-plugin css-loader file-loader html-loader style-loader vue-template-compiler webpack webpack-cli webpack-dev-server ```

É necessário também criar um webpack.config.js, as configurações para webpack foram adicionadas no arquivo. Basicamente
esse arquivo está definindo o path do node, carregando o plugin clean-webpack, vue-loader. O webpack foi disponibilizar os arquivos na pasta "/dist" além de criar algumas regras para definir o loader a ser utilizado para cada extensão de arquivo. Além do webpack config, será necessário criar o entry point que foi definido no webpack, que será o arquivo single-spa.config.js na raiz do projeto.

Em seguida precisamos fazer a configuração do Babel.

```
npm i -D @babel/core @babel/plugin-proposal-object-rest-spread @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react
```

Como o projeto counter deixa de ser um projeto "react" vamos precisar adicionar no projeto prinicipal as denepencias do react e react-dom

``` 
npm i react react-dom 
```