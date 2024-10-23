import { uploadPhoto, createUser } from './utils';

const instanceOfUploadPhoto = uploadPhoto();
const instanceOfCreateUser = createUser();

export default function handleProfileSignup() {
  return Promise
    .all([instanceOfUploadPhoto, instanceOfCreateUser])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(() => {
      throw new Error('Signup system offline');
    });
}
