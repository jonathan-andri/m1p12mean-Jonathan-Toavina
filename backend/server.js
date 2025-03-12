const express = require('express') ;
const mongoose = require('mongoose') ; 
const cors = require('cors') ; 
require('dotenv').config() ; 

const app = express() ;
const PORT = process.env.PORT || 5000 ;

//Middleware 
app.use(cors()) ;
app.use(express.json()) ;

//connexion a mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err=>console.log(err)) ;

app.use('/articles' , require('./routes/articleRoutes')) ;
app.use('/utilisateurs', require('./routes/userRoutes')) ;
app.use('/customers', require('./routes/customerRoutes')) ;

app.listen(PORT, () => console.log(`Started server on the port ${PORT}`)) ;