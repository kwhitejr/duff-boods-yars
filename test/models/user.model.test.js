import { expect } from 'chai';
import mongoose from 'mongoose';

import User from '../../server/schema/user_schema';
// ******** User Object Model *******//
// email: String
// password: String (hashed)
// firstName: String
// lastName: String
// workouts: Array of ObjectIds
// programs: Array of ObjectIds
//***********************************//

// NOTE: tests pass when the correct ERROR is thrown
describe('user', () => {
  const u = new User();

  it('should be invalid if email is empty', (done) => {
    u.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('should be invalid if password is empty', (done) => {
    u.validate((err) => {
      expect(err.errors.password).to.exist;
      done();
    });
  });

  it('should be invalid if first name is empty', (done) => {
    u.validate((err) => {
      expect(err.errors.firstName).to.exist;
      done();
    });
  });

  it('should be invalid if last name is empty', (done) => {
    u.validate((err) => {
      expect(err.errors.lastName).to.exist;
      done();
    });
  });
});
