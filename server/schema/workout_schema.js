import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//= ===============================
// Workout Schema
//= ===============================
const workoutSchema = new Schema({
  user: { type: ObjectId, ref: 'User', required: true }, // FK User
  program_id: { type: ObjectId, ref: 'Program', required: true }, // FK Program
  start_time: { type: Date, required: false },
  stop_time: { type: Date, required: false },
  phase_week_day: { type: String, required: true },
  title: { type: String, required: true },
  exercises: [
    { name: String, sets: Array },
  ],
});

export default mongoose.model('Workout', workoutSchema);
