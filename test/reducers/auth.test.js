import { expect } from 'chai';

import authReducer from '../../client/reducers/auth_reducer';

describe('auth_reducer', () => {

  it('handles AUTH_USER', () => {
    const initialState = { 
      error: '', 
      message: '', 
      content: '', 
      authenticated: false, 
      user: null 
    };
    const action = {
      type: 'AUTH_USER',
    };
    const nextState = authReducer(initialState, action);

    expect(nextState).to.equal({
      error: '', 
      message: '', 
      content: '', 
      authenticated: true, 
      user: null
    });
  });

});