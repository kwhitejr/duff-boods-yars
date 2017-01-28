/*
import { expect } from 'chai';
import nock from 'nock';
import * as authActions from '../../client/actions/auth_actions';

const API_URL = 'http://localhost:3000/api';
const mockPW = 'adminroot';
const mockData = {
  token: 'applespaghettibeer',
  user: {
    _id : '58411d3d43e3f6cda7840a98',
    email : 'admin@root.com',
    firstName : 'admin',
    lastName : 'root',
    workouts : [],
  }
};

describe('authActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
 
  it('loginUser() should resolve with an object containing a token and user details', (done) => {
    nock(API_URL)
      .post('/auth/login', {
        email: mockData.user.email,
        password: mockPW,
      })
      .reply(200, mockData);

    authActions.loginUser(mockData.user.email, mockPW, (data) => {
      expect(data).to.eql(mockData);
      done();
    });
  });
});
*/