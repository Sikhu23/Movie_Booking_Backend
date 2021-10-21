
const express = require("express");
const cors = require('cors');
const PORT = 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res)=>{
  res.json({message : "Welcome to Upgrad Movie booking application development."});
})

// // movie routes
// require("./routes/movie.routes")(app);
// // genre routes
// require("./routes/genre.routes")(app);
// // artist routes
// require("./routes/artist.routes")(app);
// // user routes
// require("./routes/user.routes")(app);

app.listen(PORT, ()=>console.log(`Server has started at port ${PORT}`))
// const db = require("./models");

// const main = (async()=>{
//   try{
//     await db.mongoose.connect(db.url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//     console.log("Connected to the database!");
//   } catch(err){
//       console.log("Cannot connect to the database!", err);
//       process.exit();
//   }
// })();