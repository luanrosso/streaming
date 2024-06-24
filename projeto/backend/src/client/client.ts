import postgres from 'postgres'

const client = postgres({ 
    host: 'localhost',           
    port: 5432,          
    database: 'trabalho',          
    username: 'postgres',          
    password: '123',
}) 

export default client