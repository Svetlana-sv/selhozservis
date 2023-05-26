import { ApiObjectResponse } from './apiResponse';

export interface IUser {
    username: string;
    email: string;
    password: string;
}

export type User = {
    id: number;
    attributes: {
        username: string;
        email: string;
        provider: string;
    };
};

export type UserInfo = {
    id: number;
    attributes: {
        name: string;
        type: string;
        last_name: string;
        middle_name: string;
        number: string;
        user: ApiObjectResponse<User>;
    };
};

export interface IUserInfo {
    name?: string;
    type?: string;
    last_name?: string;
    email?: string;
    middle_name?: string;
    number?: string;
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
    jwt: string;
    user: {
        id: number;
    };
}

export type UserRes = {
    id: number;
    attributes: {
        username: string;
        email: string;
    };
};
