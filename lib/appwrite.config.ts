import * as sdk from "node-appwrite";

export const DATABASE_ID =process.env.NEXT_PUBLIC_DATABASE_ID
export const PATIENT_COLLECTION_ID =process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID


const client = new sdk.Client();

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || 'https://cloud.appwrite.io/v1';
const PROJECT_ID = process.env.PROJECT_ID || "67128764002c3a641387";
const API_KEY = process.env.API_KEY || 'standard_2a8a28a6e825e15ea10e9f455e05417ba98b99a75ee5a672fb5292468fcbec306d80534d7b5d447f66e2e98ee604b69d9d60404aadbcd42fb0ceb3a0ce997e4f688fb0f90ffd5234eaed46aad3d6a743c771123c77789754ee02a0bf8885d709fe892e3f61d62e51aa0e78811eb09e70ba28a676fd326da05be2b4e38274ff1f'


client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);