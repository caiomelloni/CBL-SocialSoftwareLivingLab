import express from 'express';
import { DataBase } from './database/db';
import { GetArticleParam } from './models/params/get_article';

const app = express()
const port = 3000
const db = new DataBase()

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server up at ${port}`)
})

app.get('/articles', (req, res) => {
   const queryParams = req.query as GetArticleParam
   let articles = db.articles

   if(queryParams.minDate) {
    const minDate = new Date(queryParams.minDate)
    articles = articles.filter((article) => article.date >= minDate)
   }
   if(queryParams.maxDate) {
    const maxDate = new Date(queryParams.maxDate)
    articles = articles.filter((article) => article.date <= maxDate)
   }
   if(queryParams.tag) {
    articles = articles.filter((article) => article.tag === queryParams.tag)
   }

   res.send(articles) 
})