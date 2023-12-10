import { makeObservable, observable, action } from "mobx";

interface IUsuario {
    email: string,
    token: string
}

class AutenticaStore {
    estaAutenticado = false;
    usuario: IUsuario = {email: "", token: ""};

    constructor() {
        makeObservable(this, {
            estaAutenticado: observable,
            usuario: observable,
            login: action,
            logout: action
        })
    }

    login({email, token} : IUsuario) {
        this.estaAutenticado = true;
        this.usuario = {email, token};
    }

    logout() {
        this.estaAutenticado = false;
        this.usuario = {email: "", token: ""}
    }
}

const autenticaStore = new AutenticaStore();

export default autenticaStore;