const router = require("express").Router(); //Definimos que es un archivo de ruta.
const { QuotesController } = require("../controllers"); //requerimos al controlador que es quien movera los hilos para las diferentes peticiones.

router.get("/quotes", QuotesController.index); //Cuando nos pidan /quotes retornaremos el metodo index definido en el contorlador.
router.get("/quotes/all", QuotesController.get); //Cuando nos pidan los quotes, redirigiremos a la seccion /all y esto invoca el metodo get que esta defido en el controlador. Axios en la parte del frontend se encarga de hacer esto posible.
router.post("/quotes", QuotesController.add); // Metodo definido en el controlador para agregar nuevos coutes y nos redirige a la raiz de quotes.

module.exports = router; //exportamos esta ruta.
