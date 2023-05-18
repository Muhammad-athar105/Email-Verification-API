const express = require ("express");
const cors = require ("cors");
require("dotenv").config();//to use env variable
require("./db/connectDB");
const app = express();

//import routes
const authRoutes = require ("./routes/route");

app.use(express.json());
app.use(cors());

//middleware 
app.use("/api", authRoutes);

const port  = process.env.PORT;
app.listen(port, () => {
console.log(`Server is listening on port: ${port}`);
})