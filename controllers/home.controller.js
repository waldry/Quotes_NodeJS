const path = require("path"); //utilizamos el modulo de direccikones(path)

function render(file, res) {
  //funcion anonima que pasa como parametro el nombre del fichero y la respuesta.
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`)); //Respuesta que lee usando el modulo de direcciones(path) y variables de entorno como dirname de manera dinamica un archivos
}

class HomeController {
  //Clase de la pagina index.js
  async index(req, res) {
    //proceso asincrono que requiere y responde.
    return render("home", res); // Devuelve la funciona que buscara lo  que se le pase como parametro, en este caso home.html
  }
  async about(req, res) {
    return render("about", res);
  }
}

module.exports = new HomeController();
