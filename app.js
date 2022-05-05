const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// setting template engine 
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting template engine
app.use(express.static('public'))

// route setting
// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.get('/about', (req, res) => {
//   res.render('about')
// })

// app.get('/portfolio', (req, res) => {
//   res.render('portfolio')
// })

// app.get('/contact', (req, res) => {
//   res.render('contact')
// })
app.get('/:page',(req,res) =>{
  const pages = ['about','portfolio','contact']
  if (pages.includes(req.params.page)) {
    res.render(req.params.page)
  }else {
    // 找不到的話就回到首頁
    res.render('index')
  }
})


// start  &  listen on Express server
app.listen(port, () => {
  console.log(`express is listening on localhost:${port} `)
})