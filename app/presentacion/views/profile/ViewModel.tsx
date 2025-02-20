import {deleteUserUseCase} from "../../../domain/useCases/UserLocal/DeleteUser";
import useUserLocalStorage from "../../hooks/useUserLocalStorage";

const ProfileViewModel = () => {

    const {user} = useUserLocalStorage();

    const deleteSession = async () => {
        await deleteUserUseCase()
    }

    return {
        deleteSession,
        user
    }

}

export default {ProfileViewModel};