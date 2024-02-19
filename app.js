require("dotenv").config();

const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const userRouter = require('./routes/userRoutes')

app.use(express.json())

app.use('/api/v1',userRouter ); 


const start = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI)
    app.listen(4000, () =>
      console.log(`Server is listening on port 4000...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()