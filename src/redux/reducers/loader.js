const START_LOADER = 'START_LOADER';
const END_LOADER = `END_LOADER`;

const initialState = {
	isLoading: false,
};

export const startLoader = () => ({
	type: START_LOADER
})

export const endLoader = () => ({
	type: END_LOADER
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch(action.type) {
		case START_LOADER:
			return {
				...state,
				isLoading: true,
			}
		case END_LOADER:
			return {
				...state,
				isLoading: false,
			}
		default: 
			return state;
	}
}