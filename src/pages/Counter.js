import React from 'react'
import { useReducer } from 'react'

const Counter = () => {
	const initialState = 0
	const reducer = (state, action) => {
		if (action.type === 'INCREMENT') {
			return state + 1
		} else if (action.type === 'DECREMENT') {
			return state - 1
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			My Count is : {state}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
		</div>
	)
}

export default Counter
