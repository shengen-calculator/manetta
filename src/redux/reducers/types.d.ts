export type MessageType = "ERROR" | "INFO" | "WARNING" | "SUCCESS";
export type AuthenticationState = {
    role: string,
    name: string,
    logging: boolean,
    registering: boolean
}
export type MessageState = {
    type: MessageType
    text: string
}
export type ApplicationState = {
    authentication: AuthenticationState,
    message: MessageState
}