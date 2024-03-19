const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/Event-Registration").then(() => {
mongoose.connect("mongodb+srv://btechkings321:Qwerty12345@rj.dx72t6d.mongodb.net/RegistrationData?retryWrites=true&w=majority&appName=Rj").then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(`Failed to connect with database , ${err}`);
})