import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { apiRequest } from '../utils/api'

import {
    validateName,
    validateEmail,
    validatePassword,
    normalizeEmail,
} from '../utils/validation'

import Card from '../components/Card'
import PageLayout from '../components/PageLayout'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

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
            [name]: '',
            form: '',
        }))

        setIsSubmitted(false)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const validationErrors = validateForm()

        setErrors(validationErrors)
        setIsSubmitted(false)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const formData = {
            name: name.trim(),
            email: normalizeEmail(email),
            password,
        }

        setIsLoading(true)

        try {
            const { response, data } = await apiRequest(
                '/api/v1/auth/register',
                {
                    method: 'POST',
                    body: formData,
                }
            )

            console.log(
                'Registration status:',
                response.status
            )

            console.log(
                'Registration response:',
                data
            )

            setIsSubmitted(true)

            setName('')
            setEmail('')
            setPassword('')

            navigate('/login')
        } catch (error) {
            console.error(
                'Registration request failed:',
                error
            )

            setErrors({
                form:
                    error.message ||
                    'Registration failed. Please try again.',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <PageLayout>
            <main className="mx-auto w-full max-w-xl px-4 py-8">
                <section className="mb-6">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Create your PrepPilot account
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        Create an account to start your interview
                        preparation.
                    </p>
                </section>

                <Card title="Register">
                    {errors.form && (
                        <p
                            role="alert"
                            className="mb-5 rounded-md border border-gray-300 bg-gray-50 p-3 text-sm"
                        >
                            {errors.form}
                        </p>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gray-500 disabled:bg-gray-100"
                            />

                            {errors.name && (
                                <p className="mt-2 text-sm">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gray-500 disabled:bg-gray-100"
                            />

                            {errors.email && (
                                <p className="mt-2 text-sm">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gray-500 disabled:bg-gray-100"
                            />

                            {errors.password && (
                                <p className="mt-2 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading
                                ? 'Creating Account...'
                                : 'Create Account'}
                        </button>
                    </form>

                    {isSubmitted && (
                        <p className="mt-4 text-sm font-medium">
                            Registration successful!
                        </p>
                    )}
                </Card>
            </main>
        </PageLayout>
    )
}

export default Register