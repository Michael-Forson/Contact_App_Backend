const express = require("express");
const app = express();
require("dotenv").config();
const contacts = require("./routes/contacts.js");
const connectDB = require("./db/connect.js");
const port = process.env.PORT || 3100;
const notFound = require('./middleware/notFound.js')
const errorHandlerMiddleware=require('./middleware/errorHandler.js')



//routes
app.use(express.json());
app.use("/api/v1/contacts", contacts);
//middlware
app.use(notFound)
app.use(errorHandlerMiddleware)
// app.get('/', (req, res) => {
//     res.send('Welcome to my API');
// })

////////api/////
//app.get('/api/v1/contacts')-get all contacts
//app.post('/api/v1/contacts')-create contact
//app.get('/api/v1/contacts/:id')-get a single contact
//app.patch('/api/v1/contacts/:id')-update contact
//app.delete('/api/v1/contacts/:id')-delete contact

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
