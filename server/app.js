const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://localhost:27017/gql-bookretrieval');

mongoose.connection.once('open',()=>{
    console.log('Connection opened');
})

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000,()=>{
    console.log('Listening to 4000')
})