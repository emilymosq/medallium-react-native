import {deleteUserUseCase} from "../../../domain/useCases/UserLocal/DeleteUser";

const ProfileViewModel = () => {

    const deleteSession = async () => {
        await deleteUserUseCase()
    }

    return {
        deleteSession
    }

}

export default {ProfileViewModel};