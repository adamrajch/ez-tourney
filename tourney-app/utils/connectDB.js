import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //Use existing DB connection
    console.log("Using existing connection");
    return;
  }
  //Use new databse connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
