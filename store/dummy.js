const db = {
  'user': [
    { id: '1', name: 'Carlos' },
  ],
};

const list = async (tabla) => {
  return db[tabla];
};

const get = async (tabla, id) => {
  let colection = await list(tabla);
  return colection.filter(item => item.id === id)[0] || null;
};

const upsert = async (tabla, data) => {
  db[collection].push(data);
};

const remove = async (tabla, id) => {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};