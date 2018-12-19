import * as express from 'express'
import * as graphql from 'express-graphql'
import schema from './graphql/schema'

class App {

    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
    }

    private middleware(): void {

        this.express.use('/graphql', graphql({
            schema,
            graphiql: (process.env.NODE_ENV.trim() === 'development')
        }))
    }
}

export default new App().express;