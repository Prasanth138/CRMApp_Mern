require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));


//Server production Asset
// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join("Frontend/build")))
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname,"Frontend","build", "index.html"));
//     })
// }


//port
const PORT=process.env.PORT || 3000;

// //MONGODB URI
const MONGO_URL= "mongodb+srv://userpro:userpro@cluster0.0exjg24.mongodb.net/userprofile?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})


// const connect = async () => {
//     try {
//       await mongoose.connect(process.env.MONGO_URI,{
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         useCreateIndex: true
//     });
//       console.log("Connected to mongoDB.");
//     } catch (error) {
//       throw error;
//     }
//   };
//   mongoose.connection.on("disconnected", () => {
//     console.log("mongoDB disconnected!");
//   });

//   app.listen(PORT, ()=>{
//     connect();
//     console.log(`Server is running on ${PORT}`)
// })