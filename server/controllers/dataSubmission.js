import workouts from '../../client/config/workouts';

const mongoose = require('mongoose');
const cookie = require('react-cookie');

exports.submitWorkout = (req, res, next) => {
  const workoutId = req.body.workoutId; // [phase, day, week]
  const workoutData = req.body.workoutData; // { exercise: [] }
  const user = cookie.load('user');

  //-------------------
  // Error Handling
  //-------------------

  // Return error if no ID is provided
  if (!workoutId) {
    return res.status(422).send({ error: 'No workout ID was provided.' });
  }

  // Return error if no data is provided
  if (!workoutData) {
    return res.status(422).send({ error: 'No workout data was sent.' });
  }
}