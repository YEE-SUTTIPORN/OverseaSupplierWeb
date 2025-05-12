export interface ResponseMessage {
    success: boolean,
    message: string
}

export interface ResponseMessageData<T> extends ResponseMessage {
    data?: T
}
