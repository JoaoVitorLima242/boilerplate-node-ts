import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import IndexRoute from '../routes/index.routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(express.static('upload'))
  }

  private database() {
    const uri = process.env.MONGO_URI!

    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => {
        console.log('Banco esta ON')
      },
    )
  }

  private routes() {
    this.express.use('/', IndexRoute)
  }
}

export default new App().express
