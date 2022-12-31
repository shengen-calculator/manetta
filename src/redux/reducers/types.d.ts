import {VariantType} from "notistack";

export type AuthenticationState = {
    role: string,
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