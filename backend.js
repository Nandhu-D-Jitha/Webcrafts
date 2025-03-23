const express = require("express")
const pug = require("pug")
const app = express()

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views','views')

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(80)