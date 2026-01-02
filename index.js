const express = require("express");
require("dotenv").config();
const dbConnection = require ("./config/dbConnection");
const userRoutes = require ("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");//for seq purpose to connect frontnen adn backend

const app = express();

//use middleware
app.use(express.json());
app.use(cors({
    origin : ["https://market-super-frontend.netlify.app/"],
    methods:["GET" , "POST" , "PUT" , "DELETE"],
    credentials:true //update form netlify ccept all the page
}));
app.use("/api",userRoutes);
app.use("/auth",authRoutes);
app.use("/product", productRoutes);


dbConnection();
app.listen(process.env.port,() => {
    console.log(`Server running on http://localhost:${process.env.port}`);
})