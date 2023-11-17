/* const { getCharById } = require('./controllers/getCharById'); */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const { sequelize } = require("./DB_connection");
const server = express();
const PORT = 3001;
server.use(morgan('dev'))
server.use(cors())
server.use(express.json());
sequelize
.sync({ force:false })
.then(()=>{
  server.use('/rickandmorty', router)
  server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT);
  });
}).catch(err=>console.log(err));