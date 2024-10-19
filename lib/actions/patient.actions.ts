import { RegisterUserParams, TCreateUser } from "@/types/userType";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import { ID, Query } from "node-appwrite";
import { DATABASE_ID, databases, PATIENT_COLLECTION_ID, users } from "../appwrite.config";
import { patientFormScheme } from "../validator";

import * as z from "zod"
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

            throw response?.users[0]
        }
    }
    
}


export async function getUser({id}: {id:string}){
    try{
        const user = await users.get(id)
        return user
    }catch(error){
        console.log(error)
    }

}

export async function createPatient(data: RegisterUserParams){
    try{
        const document = databases.createDocument(
            DATABASE_ID!,
            PATIENT_COLLECTION_ID!,
            ID.unique(),
            data
        )
        return document
    }catch(error){
throw new Error(`${error}`)
    }
}