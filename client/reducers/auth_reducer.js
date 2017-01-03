const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const AUTH_ERROR = 'AUTH_ERROR';
// const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
// const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
// const PROTECTED_TEST = 'PROTECTED_TEST';
const STORE_USER = 'STORE_USER';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false, user: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case STORE_USER:
      return { ...state, user: action.payload };
  }

  return state;
}
