const GET_BIRTHDAYS_START = 'GET_BIRTHDAYS_START';
const GET_BIRTHDAYS_SUCCESS = 'GET_BIRTHDAYS_SUCCESS';
const GET_BIRTHDAYS_FAIL = 'GET_BIRTHDAYS_FAIL';

const initialState = {
	birthdays: {},
	error: null,
	loading: false,
}

export const getBirthdaysStart = () => ({
	type: GET_BIRTHDAYS_START,
})

export const getBirthdaysSuccess = (birthdays) => ({
	type: GET_BIRTHDAYS_SUCCESS,
	payload: birthdays,
})

export const getBirthdaysFail = (error) => ({
	type: GET_BIRTHDAYS_FAIL,
	payload: error,
})

const birthdayReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_BIRTHDAYS_START:
			return {
				...state,
				loading: true,
			}
		case GET_BIRTHDAYS_SUCCESS:
			return {
				...state,
				loading: true,
				birthdays: action.payload,
			}
		case GET_BIRTHDAYS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default: 
			return state;
	}
}

export default birthdayReducer;