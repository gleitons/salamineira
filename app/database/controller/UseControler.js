import Use from "../useschema/UserSchema"
import database from "@/app/database/database"

//CREATE
const saveUser = async (queryUser) => {
    if(!database.connect()) return false
    const newUser = new Use(queryUser)
    return await newUser.save()

    //database.disconnect()
}
const controler = { saveUser}
export default controler