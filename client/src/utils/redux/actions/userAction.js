export const setUsername = (username) => ({
    type: 'CHANGE_USERNAME',
    payload: username,
  });
  
  export const setPassword = (password) => ({
    type: 'CHANGE_PASSWORD',
    payload: password,
  });

export const setVerify = (payload) => ({
    type: 'CHANGE_VERIFYPASSWORD',
    payload: payload
});

