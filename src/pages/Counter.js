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
		<div className="w-full h-screen flex justify-center items-center">
			<div className="h-[300px] w-[400px] border border-red-300 p-8 d-flex items-center justify-center">
				<p className="text-2xl">Count : {state}</p>
				<div className="mt-10">
					<button
						className="px-4 py-2 bg-blue-500 text-white mr-4"
						onClick={() => dispatch({ type: 'DECREMENT' })}
					>
						-
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white "
						onClick={() => dispatch({ type: 'INCREMENT' })}
					>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
