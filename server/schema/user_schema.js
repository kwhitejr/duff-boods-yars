import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

//= ===============================
// User Schema
//= ===============================
const UserSchema = new Schema({
  email: { 
    type: String, 
    required: true,
    unique: true,
    lowercase: true, 
  },
  password: { 
    type: String, 
    required: true
  },
  first_name: { 
    type: String, 
    required: true
  },
  last_name: { 
    type: String, 
    required: true 
  },
  // may need to convert `workouts` to (http://mongoosejs.com/docs/2.7.x/docs/populate.html): 
  // [{ type: Schema.ObjectId, ref 'Workout'}]
  // var Workout = mongoose.model('Workout', WorkoutSchema);
  workouts: { type: Array, default: [] }, 
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

//= ===============================
// User ORM Methods
//= ===============================

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  const user = this,
    SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  // `compare` returns a boolean response and callback
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);