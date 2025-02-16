import {UserLocalRepository} from "../../domain/repositories/UserLocalRepository";
import {UserLogin, UserLoginInterface} from "../../domain/entities/User";
import {LocalStorage} from "../sources/local/LocalStorage";


export class UserLocalRepositoryImpl implements UserLocalRepository{
    async save(user: UserLogin): Promise<void> {
        const {save} = LocalStorage();
        save("medallium_app_usuario", JSON.stringify(user));
    }
    async getUser(): Promise<UserLogin> {
        const {getItem} = LocalStorage();
        const data = await getItem("medallium_app_usuario");
        return JSON.parse(data as any) as UserLogin;
    }

    async deleteItem() : Promise<void> {
        const {deleteItem} = LocalStorage();
        await deleteItem("medallium_app_usuario");
    }
}