"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const app = (0, express_1.default)();
const port = 3000;
const db = new db_1.DataBase();
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log(`Server up at ${port}`);
});
app.get('/articles', (req, res) => {
    const queryParams = req.query;
    let articles = db.articles;
    if (queryParams.minDate) {
        const minDate = new Date(queryParams.minDate);
        articles = articles.filter((article) => article.date >= minDate);
    }
    if (queryParams.maxDate) {
        const maxDate = new Date(queryParams.maxDate);
        articles = articles.filter((article) => article.date <= maxDate);
    }
    if (queryParams.tag) {
        articles = articles.filter((article) => article.tag === queryParams.tag);
    }
    res.send(articles);
});
