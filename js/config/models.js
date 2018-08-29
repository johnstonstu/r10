import Realm from "realm";

const faveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [faveSchema] });

export const addFave = id => {
  realm.write(() => {
    realm.create("Fave", { id: id, faved_on: new Date() });
  });
};

export const getFaves = () => {
  const res = realm.objects("Fave");
  return res;
};

export const removeFave = id => {
  realm.write(() => {
    const res = realm.objects("Fave");
    const itemtodelete = res.filtered('id == $0', id);
    realm.delete(itemtodelete);
  });
};

export default realm;
