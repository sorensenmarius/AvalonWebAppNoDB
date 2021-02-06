import { HubConnectionBuilder } from "@microsoft/signalr";

export const setupSocket = () => {
    const connection = new HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_API_SOURCE}/gamehub`)
    .build();

    connection.on("MessageReceived", (message: any) => {
        console.log(message);
    });

    connection.start().catch(err => console.log(err))

    return connection;
}