import { useRef } from 'react';
export const useLiveStates = (value) => {
	const state = useRef(null);
	state.current = value;
	return state;
};
