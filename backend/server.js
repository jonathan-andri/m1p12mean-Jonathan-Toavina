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

app.use('/users', require('./routes/userRoutes')) ;
app.use('/appointments', require('./routes/appointmentRoutes'));
app.use('/cars', require('./routes/carRoutes'));
app.use('/services', require('./routes/serviceRoutes'));
app.use('/payments', require('./routes/paymentRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/notifications', require('./routes/notificationRoutes'));

app.listen(PORT, () => console.log(`Started server on the port ${PORT}`)) ;