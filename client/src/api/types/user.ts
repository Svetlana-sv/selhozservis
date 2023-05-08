export interface IUser {
    username: string;
    email: string;
    password: string;
}

export interface IUserAuth {
    identifier: string;
    password: string;
}



export interface RegisterResponse {
    status: string;
    token: string;
}

export interface AuthResponse {
    status: string;
    jwt: string;
}
