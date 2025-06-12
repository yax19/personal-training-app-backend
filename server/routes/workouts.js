const express = require('express');
const router = express.Router();
const { getWorkouts, addWorkout } = require('../server/controllers/workoutController');
const verifyUser = require('../middleware/auth');

//routes below 
// dont forget postman and check each route before moving

router.use(verifyUser);

router.get('/', getWorkouts);
router.post('/', addWorkout);

module.exports = router;