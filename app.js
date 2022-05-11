const servidor = require('./config/servidor')
const app = servidor.app 
const porta = servidor.porta 

//importar a rota index.js
const index = require('./routes/index')(app)

app.listen(porta)