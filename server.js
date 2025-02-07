const express  = require('express');
const cors  = require('cors');
const morgan  = require('morgan');
const dotenv  = require('dotenv');
const colors  = require('colors');
const { json } = require('body-parser');
const connectDb = require('./config/connectDB');

dotenv.config();

connectDb();

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'))

// trans routes
app.use('/api/v1/transections', require('./routes/transectionRoutes'))



const PORT = 8080 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});