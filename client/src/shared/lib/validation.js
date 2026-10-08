export function validateEmail(email) {
    if (email.trim() === '') {
        return 'Email is required.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Please enter a valid email address.'
    }

    return ''
}

export function validatePassword(password) {
    if (password.trim() === '') {
        return 'Password is required.'
    }

    if (password.length < 8) {
        return 'Use at least 8 characters.'
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return 'Include uppercase, lowercase, and a number.'
    }

    return ''
}

export function validateName(name) {
    if (name.trim() === '') {
        return 'Name is required.'
    }

    return ''
}

export function normalizeEmail(email) {
    return email.trim().toLowerCase()
}

export function normalizeIdentifier(identifier) {
    const value = identifier.trim()
    return value.includes('@') ? normalizeEmail(value) : value.replace(/[\s()-]/g, '')
}

export function validateIdentifier(identifier) {
    const value = identifier.trim()
    if (!value) return 'Enter your email address or mobile number.'
    if (value.includes('@')) return validateEmail(value)
    if (!/^\+[1-9]\d{7,14}$/.test(value.replace(/[\s()-]/g, ''))) {
        return 'Use your mobile number with country code, for example +919876543210.'
    }
    return ''
}

export function getPasswordChecks(password) {
    return [
        { label: '8 or more characters', passed: password.length >= 8 },
        { label: 'An uppercase letter', passed: /[A-Z]/.test(password) },
        { label: 'A lowercase letter', passed: /[a-z]/.test(password) },
        { label: 'A number', passed: /\d/.test(password) },
    ]
}
