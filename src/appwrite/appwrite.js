import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("house-arena-react-vite");

export const account = new Account(client);
export { ID } from "appwrite";
