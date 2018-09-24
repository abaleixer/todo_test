# **React con Webpack**
## **Configuración inicial versión en contrucción**
> 1. Crear carpeta projecto
> 2.  Inicializar la aplicacion con `npm init`
>     - agregar los datos que pide; al final creara el archivo `package.json`
> 3. Instalar la libreria de **React** con los comandos  
>     - `npm i react react-dom`
> 4. Instalar **Webpack** con los comandos
>     - `npm i --save-dev webpack webpack-dev-server webpack-cli`
> 5. Instalar **babel** con los comandos
>     - `npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin` **NOTA:** para corregir el error de la versión podemos instalar este comando; para bajar la versión del *loader* `npm install -D babel-loader@7 babel-core babel-preset-env webpack`
> 6. Crear el archivo `webpack.config.js` con la configuración

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
```
> 7. Crear la carpeta `src` donde agregamos los archivos principales `index.js` y `index.html` estos archivos pueden ir en la carpeta ***public*** 
> 8. Verificar la configuracion del archivo resultante `package.json` 
```
{
  "name": "todos",
  "version": "1.0.0",
  "description": "Lista de tareas React Webpack",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aleixer Alvarado Bernal",
  "license": "MIT",
  "dependencies": {
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8"
  }
}
```
> 9. Crear el archivo de configuración de babel en la carpeta raiz `.babelrc` con esta información
```
{
    "presets": [
        "env",
        "react"
    ]
}
```


---

> ¿Que es Babel?: según *https://platzi.com/blog/que-es-babel/* *Babel es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node.js entienda.
Babel funciona mediante plugins para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin babel-plugin-transform-es2015-arrow-functions podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con babel-plugin-transform-react-jsx podemos hacer que entienda código de JSX y lo convierta a código JS normal.*

> *¿Qué es Webpack?: Según *http://www.pro-react.com/materials/appendixA/*
A lo largo de los años, el desarrollo web evolucionó de páginas con pocos recursos y JavaScript a las aplicaciones completas con JavaScript complejo y grandes árboles de dependencia (archivos que dependen de muchos otros archivos).
Para ayudar a hacer frente a esta creciente complejidad, la comunidad ideó diferentes enfoques y prácticas, tales como:
El uso de módulos en JavaScript nos permite dividir y organizar un programa en varios archivos.
Preprocesadores de JavaScript (que nos permiten usar funciones que estarán disponibles en versiones futuras de JavaScript) y compilación en JavaScript (como CoffeeScript, por ejemplo)
Pero a pesar de ser inmensamente útiles, estos avances han llevado a la necesidad de dar un paso adicional en el proceso de desarrollo: necesitamos agrupar y transformar (transpilar / compilar) estos archivos en algo que el navegador pueda comprender. Ahí es donde herramientas como Webpack son necesarias.
Webpack es un paquete de módulos: una herramienta que puede analizar la estructura de su proyecto, encontrar módulos de JavaScript y otros activos para agruparlos y empaquetarlos para el navegador.*
---
---

Instalar Rutas `npm install --save react-router-dom`
Instalar TSLint `npm install eslint --save-dev`
          `npm install eslint-plugin-react --save-dev`
Instalar Redux desde *https://redux.js.org/basics/usagewithreact*  `npm install --save react-redux`
         y Redux                                                   `npm install --save redux`
Instalar Firebase como servicio de API `npm install --sabe firebase`