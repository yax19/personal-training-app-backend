const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.userId });
  res.json(workouts);
};

exports.addWorkout = async (req, res) => {
  const { name, type, sets, reps, duration } = req.body;
  const newWorkout = new Workout({
    userId: req.userId,
    name,
    type,
    sets,
    reps,
    duration
  });

  await newWorkout.save();
  res.status(201).json(newWorkout);
};