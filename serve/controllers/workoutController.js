const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.userId });
  res.json(workouts);
};

exports.addWorkout = async (req, res) => {
  const workout = await Workout.create({ ...req.body, userId: req.userId });
  res.json(workout);
};