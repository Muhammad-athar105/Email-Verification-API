const mongoose = require('mongoose');

//connect mongo Db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  //useFindAndModify: true,
  useUnifiedTopology: true,
  //useCreateIndex: true
}).then(() => {
  console.log("Successfully connected to MongoDB");
}).catch(err => {
  console.log("DB connection error", err)
})