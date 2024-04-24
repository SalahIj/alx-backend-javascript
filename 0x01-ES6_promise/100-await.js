import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    return { pic: await uploadPhoto(), utili: await createUser() };
  } catch (err) {
    return { pic: null, utili: null };
  }
};

export default asyncUploadUser;
