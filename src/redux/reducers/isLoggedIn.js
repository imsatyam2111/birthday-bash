const LOGIN = 'LOGIN';
const LOGOUT = `LOGOUT`;

const initialState = {
	isLoggedIn: false,
};

export const login = () => ({
	type: LOGIN
})

export const logout = () => ({
	type: LOGOUT
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
			}
		default: 
			return state;
	}
}