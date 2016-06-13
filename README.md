# Rappi UI Test

Hola mi Nombre es Sebastian Gomez y este es mi test de UI para Rappi

## En producción
Si quieres verlo en funcionamiento solo tienes que ir aquí: 
[Demo Url] como podrás ver esta hosteada en gitHub pages.

## En desarrollo

Para este test usé [angular-seed] para empezar desde un borrador, esto incluía AngularJS en la versión 1.5.x y para las pruebas unitarias Karma + Jasmine, y para las pruebas end to end Protractor + Jasmine. 

Para el diseño y la maquetación usé y Angular-Material. Y como preprocesador de CSS usé [Sass] y lo combiné con gulp para crear una experiencia de desarrollo más fluida.

Si quieres trabajar en el en tu entorno local deberas tener instalado:

- [nodeJs]

y deberás:

- Clonar el repositorio
- Instalar las dependencias: 
```sh
$ npm install
$ bower install
```
- Iniciar el http-live server: 
```sh
$ npm start
```

## Testing

### Pruebas Unitarias
Para correr las pruebas unitarias deberas ejecutar:
```sh
$ npm test
```
### Pruebas End to End
Para correr las pruebas end to end deberás:

- Instalar un plugin:

```sh
$ npm run update-webdriver
```
- Ejecutar las pruebas
```sh
$ npm run protractor
```

## Configuración

Para cambiar la URL del Backend donde se capturan las "News", debes modificar el archivo app.js y allí en la línea 11 verás: 

```sh
.constant('APIURL', 'http://seagomezar.github.io/rappitest/news_mock.json')
```

Simplemente cambia http://seagomezar.github.io/rappitest/ por la url que tu prefieras.

### Gracias

[Demo Url]: <http://seagomezar.github.io/rappitest/>
[AngularJS]: <https://angularjs.org/>
[nodeJs]: <http://nodejs.org>
[Sass]: <http://sass-lang.com/>
[angular-seed]: <https://github.com/angular/angular-seed>