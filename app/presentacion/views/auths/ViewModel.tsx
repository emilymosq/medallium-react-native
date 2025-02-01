import React, {useEffect, useState} from "react";
import {GetUserUseCase} from "../../../domain/useCases/auth/GetUser";
import {LoginAuthUseCase} from "../../../domain/useCases/UserLocal/LoginAuth";
import {SaveUserUseCase} from "../../../domain/useCases/auth/SaveUser";
import {UserLogin} from "../../../domain/entities/User";
import {RegisterAuthUseCase} from "../../../domain/useCases/UserLocal/RegisterAuth";

const LoginViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    useEffect(() => {
        getUserSession()
    })

    const getUserSession = async () => {
        const getUser = await GetUserUseCase();
        console.log("Sesion del usuario: " + JSON.stringify(getUser));
    }
    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async () => {
        if (validateForm()){
            const response = await LoginAuthUseCase(values)
            if(!response.success){
                setErrorMessage(response.message)
            } else{
                await SaveUserUseCase(response.data as UserLogin)
            }
        }
    }

    const validateForm = () => {
        if (values.email === "") {
            setErrorMessage("Correo electrónico obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        return true;
    }

    return{
        ...values,
        onChangeLogin,
        login,
        errorMessage
    }
}

const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState(String);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password: "",
    })
    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }
    const register = async () => {
        if (validateForm()){
            const response = await RegisterAuthUseCase(values)
            console.log("RESULT: " + JSON.stringify(response))
        }
    }
    const validateForm = () => {
        if (values.firstName === "") {
            setErrorMessage("Nombre obligatorio")
            return false;
        }
        if (values.lastName === "") {
            setErrorMessage("Nombre obligatorio")
            return false;
        }
        if (values.email === "") {
            setErrorMessage("Correo obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage,
        validateForm
    }
}
export default {LoginViewModel, RegisterViewModel};
