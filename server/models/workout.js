const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  type: String,
  sets: Number,
  reps: Number,
  duration: Number,
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
