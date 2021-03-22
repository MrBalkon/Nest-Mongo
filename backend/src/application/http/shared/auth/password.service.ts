import * as bcrypt from "bcrypt"

export default function encryptPassword(password: string){
    return bcrypt.hashSync(password, 10)
}