import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  data: { 
    user: { type: 'String', required: true }, // FK User
    program_id: { type: 'String', required: true }, // FK Program
    start_time: { type: Date, required: false },
    stop_time: { type: Date, required: false },
    phase_week_day: { type: 'String', required: true },
    title: { type: 'String', required: true },
    exercises: [
      { name: String, sets: Array }
    ]
  }
});

export default mongoose.model('Workout', workoutSchema);