import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInUser } from '../utils/context/firebase'
import { useContext } from 'react'
import { AuthContext } from '../utils/context/auth-context'

export default function Login() {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    })

    const { currentUser } = useContext(AuthContext)

    const { email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields((prev) => ({ ...prev, [name]: value }))
    }

    const resetFormFields = () => {
        return setFormFields({
            email: '',
            password: '',
        })
    }

    useEffect(() => {
        console.log('currentUser:', currentUser)
    }, [currentUser])

    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const userCredentials = await signInUser(email, password)
            if (userCredentials) {
                resetFormFields()
                navigate('/')
            }
        } catch (error) {
            console.log('Error signing in user:', error.message)
        }
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document.getElementById('my_modal_1').showModal()
                }
            >
                Sign In
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Sign in to your account
                    </h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <label htmlFor='email' className="py-4">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="email"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                            Email
                        </label>
                        <label htmlFor='password' className="py-4">
                            <input
                                id="password"
                                name="password"
                                value={password}
                                type="password"
                                onChange={handleChange}
                                placeholder="***********"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                            Password
                        </label>

                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button type="submit" className="btn">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}
