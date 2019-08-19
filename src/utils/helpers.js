import jwt from 'jsonwebtoken';

export const errorGenerator = (field = null, message) => {
  console.log(message);
  return { error: { field, message  } }
};

export const getUser = (token) => {
  let currentUserToken;
  if (token) {
    currentUserToken = token.split(' ')[1];
  } else {
    currentUserToken = ''
  }

  if (!currentUserToken) return false

  let decodedToken;
  try {
    decodedToken = jwt.verify(currentUserToken, process.env.SECRET_KEY);
  } catch (error) {
    return false
  }

  if(!decodedToken) return false
  return !!decodedToken;
}