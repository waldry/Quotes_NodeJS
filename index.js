const express = require("express"); //Invocando a Express.js
const app = express(); // Utilizandolo en una variable.
const { port } = require("./config"); //Descomponemos el puerto que se exporta como un objeto.
const { HomeRoutes, QuotesRoutes } = require("./routes"); //Ruta principal y rutas de los quotes.
const { NotFoundMiddleware } = require("./middlewares"); // Middleware para las rutas no existentes.

app.use(express.static("./public")); // Middleware que hace accesible la carpeta public para nuestro servidor.
app.use(express.json()); //Middleware

app.use("/", HomeRoutes); //Ruta raiz, la pagina pricipal.
app.use("/", QuotesRoutes); //Ruta raiz, la pagina pricipal.

app.use(NotFoundMiddleware); //Ruta en caso de que no exista la ruta solicitada, es un MiddleWare.

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // Mensaje en cosnola para saber que el web server esta funcionando.
