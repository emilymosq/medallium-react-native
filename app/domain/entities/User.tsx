export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token?: string;
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">;

export interface UserLogin extends UserInterface {
    token: string;
}