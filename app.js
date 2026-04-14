const express = require('express')
const app = express();
const host = 8080;

const path = require('node:path')
const ejsMate = require('ejs-mate')

const bookRoutes = require('./routes/bookRoutes.js')
const genreRoutes = require('./routes/genreRoutes.js')
const authorRoutes = require('./routes/authorRoutes.js')


app.use(express.urlencoded({extended:true}))





app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/book', bookRoutes);
app.use('/genre', genreRoutes);
app.use('/author', authorRoutes);



app.get('/', (req,res) => {
    res.render('index');
})





app.listen(host, () => {
    console.log(`Server is running on ${host}`);
})