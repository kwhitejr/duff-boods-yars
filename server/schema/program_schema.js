import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//= ===============================
// Program Schema
//= ===============================
const programSchema = new Schema({
  user_id: { type: String, required: true }, // FK User
  last_modified: { type: Date, required: true },
  start_date: { type: Date, required: false },
  stop_date: { type: Date, required: false },
  program_type: { type: String, required: true },
  workouts: { type: Array, default: [] },
});

export default mongoose.model('Program', programSchema);
