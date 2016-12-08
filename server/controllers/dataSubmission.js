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
    return res.status(422).send({ error: 'No workout data was provided.' });
  }
}

exports.createNewProgram = (req, res, next) => {
  const programType = req.body.programType;
  const user = cookie.load('user');
  console.log(programType);
  console.log(user);
  const user_id = user._id;

  //-------------------
  // Error Handling
  //-------------------

  // Return error if no ID is provided
  if (!programType) {
    return res.status(422).send({ error: 'No program type was provided.' });
  }

  // Return error if no data is provided
  if (!user) {
    return res.status(422).send({ error: 'No user data was provided.' });
  }

  mongoose.model('Program').findOne({ user_id, programType }, (err, existingProgram) => {
    // If error, return error
    if (err) { return next(err); }

    // If this user already has a program of type programType, send warning --> this should be refactored to test if the `existingProgram` is **incomplete**
    // if (existingProgram) {
    //   return res.status().send({ error: 'That program already exists' });
    // }

    const Program = mongoose.model('Program');

    const program = new Program({
      user_id,
      program_type: programType,
    });

    program.save((err, user) => {
      if (err) { return next(err); }

      // update user cookie?
    });
  });
}