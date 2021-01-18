import { Interface } from "readline";

export interface CredentialsUser{
  email: string,
  password: string
}

export interface AuthenticationResponse{
  token: string,
  expiration:Date
}

export interface UserDTO{
  id:string,
  email: string,
}


