import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
    },
    {
        id: 2,
        name: 'carlos',
        email: 'carlos@gmail.com'
    },
    {
        id: 3,
        name: 'pedro',
        email: 'pedro@gmail.com'
    },
]

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
}

export default makeExecutableSchema({ typeDefs, resolvers })