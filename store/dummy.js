const db = {
  'user': [
    { id: '1', name: 'Carlos' },
  ],
};

const list = (tabla) => {
  return db[tabla];
};

const get = (tabla, id) => {
  let colection = list(tabla);
  return colection.filter(item => item.id === id)[0] || null;
};

const upsert = (tabla, data) => {
  db[collection].push(data);
};

const remove = (tabla, id) => {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};