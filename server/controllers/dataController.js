import workouts from '../../client/config/workouts';
import Program from '../schema/program_schema';

const mongoose = require('mongoose');

exports.submitWorkout = (req, res, next) => {
  const workoutId = req.body.workoutId; // [phase, day, week]
  const workoutData = req.body.workoutData; // { exercise: [] }

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
  const user_id = req.body.userId;
  const last_modified = new Date;
  console.log(last_modified);

  //-------------------
  // Error Handling
  //-------------------

  // Return error if no ID is provided
  if (!programType) {
    return res.status(422).send({ error: 'No program type was provided.' });
  }

  // Return error if no data is provided
  if (!user_id) {
    return res.status(422).send({ error: 'No user id was provided.' });
  }

  Program.findOne({ user_id, programType }, (err, existingProgram) => {
    // If error, return error
    if (err) { return next(err); }

    // If this user already has a program of type programType, send warning --> this should be refactored to test if the `existingProgram` is **incomplete**
    // if (existingProgram) {
    //   return res.status().send({ error: 'That program already exists' });
    // }

    // const Program = mongoose.model('Program');

    const program = new Program({
      user_id,
      last_modified,
      program_type: programType,
    });

    program.save((err, user) => {
      if (err) { return next(err); }

      // update user cookie?
    });
  });
}