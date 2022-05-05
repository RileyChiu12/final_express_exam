const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// setting template engine 
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

/// 疑問: 助教想問在bash上一直出現 TypeError: exphbs is not a function ， 在stack overflow 查詢到此解方，不太清楚為何要在exphbs上再加上engine??
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting template engine
app.use(express.static('public'))

// route setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// start  &  listen on Express server
app.listen(port, () => {
  console.log(`express is listening on localhost:${port} `)
})