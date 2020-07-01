import authReducer from '../../context/auth/authReducer';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};

test('should load user correctly', () => {
  const action = {
    type: 'USER_LOADED',
    payload: 'newUser',
  };

  const state = authReducer(initialState, action);
  expect(state.user).toEqual('newUser');
  expect(state.loading).toEqual(false);
  expect(state.isAuthenticated).toEqual(true);
});

// test('should register user correctly', () => {})

// test('should login user correctly', () => {

// })

test('should logout user correctly', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer(initialState, action);
  expect(state.token).toEqual(null);
  expect(state.loading).toEqual(false);
  expect(state.isAuthenticated).toEqual(false);
  expect(state.user).toEqual(null);
});

test('should clear errors correctly', () => {
  initialState.error = 'errors';
  console.log(initialState);
  const action = {
    type: 'CLEAR_ERRORS',
  };
  const state = authReducer(initialState, action);
  expect(state.error).toEqual(null);
});
