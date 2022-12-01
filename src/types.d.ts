export interface AuthenticationParams {
    email: string
    password: string
}

export interface RegistrationParams {
    email: string
    password: string
    repeatPassword: string
}

export interface TokenResult {
    claims: {
        role: string
    }
}

