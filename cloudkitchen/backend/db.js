const mongoose = require("mongoose");

const mongooseUrl =
  "mongodb+srv://Mukesh:Mukesh@950@cluster0.phwub5z.mongodb.net/cloudFood?retryWrites=true&w=majority&appName=Cluster0";

// Mukesh@950,cloudFood
const mongoDB = async () => {
  try {
    await mongoose.connect(mongooseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("products");
    let data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB();
