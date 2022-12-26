import React from 'react'
import { useReducer } from 'react'

const Counter = () => {
	const initialState = 0
	const reducer = (state, action) => {
		if (action.type === 'INCREMENT') {
			return state + action.payload.count
		} else if (action.type === 'DECREMENT') {
			return state - action.payload.count
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="h-[300px] w-[400px] border border-red-300 p-8">
				<p className="text-2xl text-center">Count : {state}</p>
				<div className="mt-10 text-center">
					<button
						className="px-4 py-2 bg-blue-500 text-white mr-4"
						onClick={() =>
							dispatch({ type: 'DECREMENT', payload: { count: 5 } })
						}
					>
						Decrement
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white "
						onClick={() =>
							dispatch({ type: 'INCREMENT', payload: { count: 5 } })
						}
					>
						Increment
					</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
