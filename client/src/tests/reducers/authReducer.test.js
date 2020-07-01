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
