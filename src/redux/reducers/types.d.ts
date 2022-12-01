export type MessageType = "ERROR" | "INFO" | "WARNING";
export type ApplicationState = {
    authentication: {
        role: string,
        name: string,
        logging: boolean,
        registering: boolean
    },
    message: {
        type: MessageType
        text: string
    }
}