import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors'
import  routes  from "./routes"
import { AppDataSource } from './data-source';

const app = express()

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")
    })
    .catch((error) => {console.log(error)})

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(3333)
