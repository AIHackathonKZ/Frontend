import { TCreateUser } from "@/types/userType";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
export async function createUser (userData: TCreateUser ){ 
    try{
        const results = await users.create(
            ID.unique(),
            userData.email,
            userData.phone,
            undefined,
            userData.name
        )
        return results
    }catch(error: any){
        console.log(error)

        if(error && error?.code === 409){
            const response = await users.list([Query.equal('email', [userData.email])])

            return response?.users[0]
        }
    }
    
}