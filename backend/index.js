// se necesita el modulo dotenv para poder trabajar con las  
// variables de entorno del fichero .env en el proceso de desarrollo
// Cuando se suba el proyecto no se trabajara con las variables de entorno
if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').config();
}  
console.log(process.env.NODE_ENV)

const express = require('express')
const morgan = require('morgan')
const multer = require('multer') // para trabajar con las imagenes. Supongo que al final no lo utilizare, mejor poner la direccion de las imagenes e la BD
const path = require('path')
const cors = require('cors')

// Initializations
const app = express()
require('./database');


// Settings
app.set('port', process.env.PORT || 3000) // Choose number port

// Midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) // Cuando reciba datos de un formulario express los entendera
app.use(express.json()) // Cuando reciba un json express los entendera
app.use(cors())


// Midleware multer
app.use(express.urlencoded({extended: false}))
app.use(express.json())
/* const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
app.use(multer({storage}).single('image')) */
// Midleware multer

// Routes
/* app.use(require('./routes/projects')) */
app.use('/api/projects', require('./routes/projects')) // Cuando entre en el navegador me mostrara los datos de el metodo get de routes/projects.js me muestre 
                                                       // http://localhost:4000/api/projects en esta direccion vere los datos que me manda el metodo get

// Static files
app.use(express.static(path.join(__dirname, 'public')))// En la direccion http://localhost:4000 me mostrara los ficheros estaticos index.html etc..


// Start the server
// Listen port choose
app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})