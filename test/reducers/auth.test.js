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

    expect(nextState).to.deep.equal({
      error: '', 
      message: '', 
      content: '', 
      authenticated: true, 
      user: null
    });
  });

  it('handles UNAUTH_USER', () => {
    const initialState = { 
      error: '', 
      message: '', 
      content: '', 
      authenticated: true, 
      user: null 
    };
    const action = {
      type: 'UNAUTH_USER',
    };
    const nextState = authReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '', 
      message: '', 
      content: '', 
      authenticated: false, 
      user: null
    });
  }); 

  it('handles AUTH_ERROR', () => {
    const initialState = { 
      error: '', 
      message: '', 
      content: '', 
      authenticated: false, 
      user: null 
    };
    const action = {
      type: 'AUTH_ERROR',
      payload: 'Such error, brah.'
    };
    const nextState = authReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: 'Such error, brah.', 
      message: '', 
      content: '', 
      authenticated: false, 
      user: null
    });
  });

    it('handles STORE_USER', () => {
    const initialState = { 
      error: '', 
      message: '', 
      content: '', 
      authenticated: true, 
      user: null 
    };
    const action = {
      type: 'STORE_USER',
      payload: {
        _id: 12345,
        firstName: 'Baba',
        lastName: 'Ganoush'
      }
    };
    const nextState = authReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '', 
      message: '', 
      content: '', 
      authenticated: true, 
      user: {
        _id: 12345,
        firstName: 'Baba',
        lastName: 'Ganoush'
      }
    });
  });

});