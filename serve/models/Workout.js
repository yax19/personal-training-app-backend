const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['Cardio', 'Strength'], required: true },
  sets: Number,
  reps: Number,
  duration: Number, // in minutes, for cardio
});

module.exports = mongoose.model('Workout', workoutSchema);