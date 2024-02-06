const express = require('express')

require('dotenv').config()
const app = express()
const methodOverride = require('method-override')


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT), () => {
    console.log('listening on port', process.env.PORT)
}
