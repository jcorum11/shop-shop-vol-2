const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://SteadyJingo:VMzwqNy6GOmYOQe3@main.zjvxb.mongodb.net/Main?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
