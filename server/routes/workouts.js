const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Workout = require('../models/workout');

// Create a new workout
router.post('/', auth, async (req, res) => {
  try {
    const workout = new Workout({
      user: req.userId,
      name: req.body.name,
      type: req.body.type,
      sets: req.body.sets,
      reps: req.body.reps,
      duration: req.body.duration
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    console.error('Error saving workout:', err);
    res.status(500).json({ msg: 'Failed to save workout' });
  }
});

// Get all workouts for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (err) {
    console.error('Error fetching workouts:', err);
    res.status(500).json({ msg: 'Failed to fetch workouts' });
  }
});

module.exports = router;