import { takeLatest, all,put, fork, call } from 'redux-saga/effects';
import '@firebase/firestore' // 👈 If you're using firestore
import { getBirthdaysFail, getBirthdaysSuccess } from '../reducers/birthdays';
import { rsf } from '../../fire';

export function* onLoadBirthdayAsync () {
	try {
		// console.log('Hello')
		const snapshot = yield call(rsf.firestore.getCollection, 'birthdays');
		console.log('snap', snapshot)
	} catch (error) {
		yield put(getBirthdaysFail(error));
	}
	// try {
	// 	const birthdays = yield new Promise((resolve) =>
	// 		firebaseDb.child("birthdays").on("value", resolve)
	// 	);
	// 	if (birthdays.val() !== null) {
	// 		yield put(getBirthdaysSuccess(birthdays.val()));
	// 	} else {
	// 		yield put(getBirthdaysSuccess({}));
	// 	}
	// } catch(error) {
	// 	yield put(getBirthdaysFail())
	// }
}

export function* onLoadBirthday() {
	yield takeLatest(`GET_BIRTHDAYS_START`, onLoadBirthdayAsync)
};

const birthdaySagas = [fork(onLoadBirthday)]

export default function* rootSaga() {
	yield all([...birthdaySagas]);
}
