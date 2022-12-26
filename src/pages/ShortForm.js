import React, { useReducer } from 'react'
import { useState } from 'react'

const ShortForm = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const initialState = 0
	const reducer = (state, action) => {
		if (action.type === 'INCREMENT') {
			return state + 1
		} else if (action.type === 'DECREMENT') {
			return state - 1
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const submit = event => {
		event.preventDefault()
		const data = {
			firstName,
			lastName,
			email,
			password,
		}
		console.log(data)
	}

	return (
		<div className="h-screen w-screen flex justify-center items-center space-y-6">
			<form className="space-y-6 shadow-md p-10" onSubmit={submit}>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onBlur={e => setFirstName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onBlur={e => setLastName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="name">Email</label>
					<input
						type="text"
						name="name"
						id="name"
						onBlur={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="name">Password</label>
					<input
						type="password"
						name="name"
						id="name"
						onBlur={e => setPassword(e.target.value)}
					/>
				</div>
				<button
					className="px-4 py-3 bg-indigo-500 text-white rounded-md"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ShortForm
