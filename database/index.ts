import express from 'express'
import bp from 'body-parser'
import "reflect-metadata"
import cors from 'cors'

import router from './routes'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(3001, ()=>{
    console.log('funciona')
})