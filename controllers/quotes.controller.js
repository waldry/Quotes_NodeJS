const path = require("path"); //path system
const DB_PATH = path.join(__dirname + "/../data/db.json"); //direccion del archivo de base de datos.
let db = require(DB_PATH); //lo metemos en otra variable.
const fs = require("fs"); //requerimos el sistema de archivos.

function render(file, res) {
  //funcion anonima que pasa como parametro el nombre del fichero y la respuesta.
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`)); //Respuesta que lee usando el modulo de direcciones(path) y variables de entorno como dirname de manera dinamica un archivos
}

class QuotesController {
  //metodo para mostrar el quotes.html
  async index(req, res) {
    return render("quotes", res);
  }
  async get(req, res) {
    //metodo para obtener los quotes de la base de datos.
    return res.send(db);
  }
  async add(req, res) {
    //metodo para agregar quotes a la base de datos. El metodo busca en la base de datos de los quotes el ultimo, obtiene el id de este y le suma 1 para no duplicar el mismo id.
    const { body: quote } = req;
    const lastQuote = db[db / length - 1];
    const { id } = lastQuote;
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return res.status(201).send(); //retornamos el estatus correspondiente (201) para decir que la modificacion fue exitosa.
  }
}

module.exports = new QuotesController(); //exportamos el controlador para que sea accesible en la ruta.
