

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aagm0404:Simraj0404@ers.qtqau8v.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;

db.on("error",  console.error.bind(console, "Error on connecting databse!"));
 
// when database is successfully connected
db.once("open", ()=>{
    console.log("Successfully connected to the MongoDB::Databse::")
});

module.exports = db;