import mongoose from 'mongoose';

const DB_PORT =
  'mongodb+srv://pronoy:1998@cluster0.ipld23k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0,';

async function connectMongoose() {
  try {
    await mongoose.connect(DB_PORT);
    console.log('Db Connected');
  } catch (error) {
    console.log(error);
  }
}
export default connectMongoose