module.exports = (app)=>{

    //rota aleatória
    app.get('/',(req,res)=>{   
    //res.send('qualquer coisa') 
    res.render('index.ejs')
    })
}