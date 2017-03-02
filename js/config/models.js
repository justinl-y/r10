import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  },
};

const realm = new Realm({ schema: [Fave] });

// getFaves
const getFaves = () => {
  realm.objects('Fave');
};

// addFaves
const addFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', { id: faveId, faved_on: Date.now() });
  });
};

// deleteFave
const deleteFave = (faveId) => {
  realm.write(() => {
    const faves = realm.objects('Fave');
    const fave = faves.filtered('id === $0', faveId);

    realm.delete(fave);
  });
};

export {
  getFaves,
  addFave,
  deleteFave,
};
