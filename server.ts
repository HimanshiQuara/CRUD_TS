require("dotenv").config()
import express from 'express'
const app = express()
const port = process.env.PORT || 3000;
import db from './models'
import { default as v1Router } from "./src/v1/routes/route";

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use('/v1', v1Router);
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})


