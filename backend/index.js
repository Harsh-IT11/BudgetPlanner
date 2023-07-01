const express = require('express')
const app = express()
const PORT = 5000
const dotenv = require('dotenv').config();

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('database connected')}).catch((e)=>console.log(e))

const cors = require('cors')
const options = {
    origin: ['http://localhost:3000','http://localhost:5000'],
    credentials: true
}
app.use(cors(options))


app.use(bodyParser.json());
const budgetRoutes = require('./routes/budgetRoutes');
app.use('/', budgetRoutes);

app.listen(PORT,()=>console.log(`server listening at ${PORT}`))

