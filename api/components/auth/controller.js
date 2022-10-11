const auth = require('../../../auth');

const TABLA = 'auth';


module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mysql');
  };

  const login = async (username, password) => {
    console.log('login');
    const data = await store.query(TABLA, { username: username });
    console.log(`🚀 ~ file: controller.js ~ line 15 ~ login ~ data`, data);
    if (data.password === password) {
      // Generar token;
      return auth.sign(data);
    } else {
      throw new Error('Informacion invalida');
    }
  };

  const upsert = (data) => {
    const authData = {
      id: data.id,
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
    login,
    upsert,
  };
};