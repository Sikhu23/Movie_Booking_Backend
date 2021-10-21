const mongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://localhost:27017";

const mongoObj = new mongoClient(dbUrl,{
    useUnifiedTopology :true
   
});

mongoObj.connect((err,dbInfo)=>{
    if(err) { console.log(err); return;}
    var db = mongoObj.db('moviesdb');
    console.log('Database Created!!');
})