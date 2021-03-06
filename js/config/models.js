import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  },
};

// set schema
export const realm = new Realm({ schema: [Fave] });

// getFaves
export const getFaves = () => (
  realm.objects('Fave').map(e => e.id)
);

// getFave
export const getFave = (faveId) => (
  realm.objects('Fave').filtered('id == $0', faveId).length
);

// addFaves
export const addFave = (faveId) => {
  const dateTime = new Date();
  dateTime.toISOString().replace('T', ' ').replace(/\..*$/, '');

  realm.write(() => {
    realm.create('Fave', { id: faveId, faved_on: dateTime });
  });
};

// deleteFave
export const deleteFave = (faveId) => {
  realm.write(() => {
    const fave = realm.objects('Fave').filtered('id == $0', faveId);

    realm.delete(fave);
  });
};

/* export {
  realm,
  getFaves,
  addFave,
  deleteFave,
};*/
