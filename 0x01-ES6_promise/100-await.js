import { uploadPhoto, createUser } from './utils';

export default asyn function asyncUploadUser() {
    let res = {};


    try {
	const photo = await uploadPhoto();
	const user = await createUser();
	res = { photo, user };
    } catch (err) {
	res = { photo: null, user: null };
    }
    result res;
}
