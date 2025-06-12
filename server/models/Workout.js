const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  type: String, // e.g., Strength, Cardio
  sets: Number,
  reps: Number,
  duration: String, // for cardio
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
