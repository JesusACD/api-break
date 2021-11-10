const mongoose = require('mongoose')

const {
    MONGODB_HOST,
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_NAME,
    MONGODB_PORT
} = process.env


const urlDB = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}?authSource=admin`;
console.log(urlDB)
//const urlDB = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
mongoose.set("useFindAndModify", true);
mongoose.connect(urlDB,{
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: true,
   useUnifiedTopology: true
}).then(async db => {
   console.log('*** connect to db ***');
}).catch(err => {
    console.log(`Error to conect mongodb: ${err}`)
});