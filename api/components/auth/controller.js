const bcrypt = require('bcrypt');

const auth = require('../../../auth');
const TABLA = 'auth';


module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mysql');
  };

  const login = async (username, password) => {
    const data = await store.query(TABLA, { username: username });

    const sonIguales = await bcrypt.compare(password, data.password);

    if (sonIguales) {
      // Generar token;
      return auth.sign({ ...data });
    } else {
      throw new Error('Informacion invalida');
    }
  };

  const upsert = async (data) => {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLA, authData);
  };

  return {
    login,
    upsert,
  };
};