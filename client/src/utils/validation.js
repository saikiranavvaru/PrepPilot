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
        return 'Password must be at least 8 characters.'
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