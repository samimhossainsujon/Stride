const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// =================================================================
// middleware
// ==================================================================
app.use(cors());
app.use(express.json());

// ==================================================================
// mongodb
// ==================================================================
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.f7u6kbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const dbConnet = async (req, res) => { 
    try {
        client.connect()
        console.log("database connection successful")
        
    } catch (error) {
        console.log(error.name, error.message);
        
    }
}

dbConnet()



// ==================================================================
// api
// ==================================================================
app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(port, () => {
    console.log(`listening on  http://localhost:${port}`);
});
