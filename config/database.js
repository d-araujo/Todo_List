//importar o mongoose
const mongoose = require('mongoose')
//scritps de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:loginregistro@fiaptecnico.acs9n.mongodb.net/test')
}

//exportar as informações para acesso externo 
module.exports = conn