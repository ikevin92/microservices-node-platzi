const { v4: uuidv4 } = require('uuid');

const TABLA = 'auth';


module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  };

  const upsert = (data) => {
    const authData = {
      id: data.id || uuidv4(),
      name: 'Luis',
    };

    if (data.username) {
      authData.username = data.username;
    };

    if (data.password) {
      authData.password = data.password;
    };

    return store.upsert(TABLA, authData);
  };

  return {
    upsert,
  };
};