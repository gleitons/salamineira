import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const dbName = process.env.URL_DATA;

const connect = async () => {
    return await mongoose.connect(dbName)
}
const disconnect = async () => {
    return await mongoose.disconnect()
}
const database = {
    connect, disconnect
}
export default database;