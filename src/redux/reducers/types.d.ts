import {VariantType} from "notistack";

export type AuthenticationRole = "ADMIN" | "BOOKER" | "NOT_AUTHORIZED";

export type AuthenticationState = {
    role: AuthenticationRole,
    name: string,
    logging: boolean,
    registering: boolean
}
export type MessageState = {
    type: VariantType
    text: string
}
export type ApplicationState = {
    authentication: AuthenticationState,
    message: MessageState,
    apiCallsInProgress: number
}