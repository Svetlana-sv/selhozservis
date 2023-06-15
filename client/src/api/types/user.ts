import {ApiArrayResponse, ApiObjectResponse} from './apiResponse';

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
    name: string;
    email: string;
    type: string;
    last_name: string;
    middle_name: string;
    number: string;
    inn: string;
    company_name: string;
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
    jwt: string;
    error: string;
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
