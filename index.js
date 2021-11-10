'use strict'

require('custom-env').env(true)
require('./config/database.config')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const routerSeries = require('./routes/series.routes')
const routerMovies = require('./routes/movies.routes')

const app = new Koa()
app.use(require('@koa/cors')())
    .use(bodyParser())
    .use(routerSeries.routes())
    .use(routerSeries.allowedMethods())
    .use(routerMovies.routes())
    .use(routerMovies.allowedMethods())
    .listen(8000)
