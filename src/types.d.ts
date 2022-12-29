export interface AuthenticationParams {
    email: string
    password: string
}

export interface RegistrationParams {
    name: string
    email: string
    password: string
}

export interface TokenResult {
    claims: {
        role: string
    }
}

