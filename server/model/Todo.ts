import mongoose, { Schema } from 'mongoose';
const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
});

const Tasks = mongoose.model('Work', todoSchema);
export default Tasks