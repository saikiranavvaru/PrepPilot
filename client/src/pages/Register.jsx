import { useState } from 'react'
import { apiRequest } from '../utils/api'
import {
    validateName,
    validateEmail,
    validatePassword,
    normalizeEmail
} from '../utils/validation'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function validateForm() {
        const newErrors = {}

        const nameError = validateName(name)
        const emailError = validateEmail(email)
        const passwordError = validatePassword(password)

        if (nameError) {
            newErrors.name = nameError
        }

        if (emailError) {
            newErrors.email = emailError
        }

        if (passwordError) {
            newErrors.password = passwordError
        }

        return newErrors
    }

    function handleInputChange(event) {
        const { name, value } = event.target

        if (name === 'name') {
            setName(value)
        }

        if (name === 'email') {
            setEmail(value)
        }

        if (name === 'password') {
            setPassword(value)
        }

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: ''
        }))

        setIsSubmitted(false)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const validationErrors = validateForm()

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const formData = {
            name: name.trim(),
            email: normalizeEmail(email),
            password
        }

        setIsLoading(true)
        setIsSubmitted(false)

        try {
            const { response, data } = await apiRequest(
                '/api/v1/auth/register',
                {
                    method: 'POST',
                    body: formData
                }
            )

            console.log('Registration status:', response.status)
            console.log('Registration response:', data)

            setIsSubmitted(true)

            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            console.error('Registration request failed:', error)

            setErrors({
                form: error.message || 'Registration failed. Please try again.'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section>
            <h1>Create your PrepPilot account</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        disabled={isLoading}
                    />

                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        disabled={isLoading}
                    />

                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        disabled={isLoading}
                    />

                    {errors.password && (
                        <p>{errors.password}</p>
                    )}
                </div>

                {errors.form && (
                    <p>{errors.form}</p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            {isSubmitted && (
                <p>
                    Registration successful!
                </p>
            )}
        </section>
    )
}

export default Register