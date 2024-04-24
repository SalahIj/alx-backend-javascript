import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const pic = await uploadPhoto();
    const utili = await createUser();
    result = { pic, utili };
  } catch (err) {
    result = { pic: null, utili: null };
  }
  return result;
}
