import { observable, computed, action } from 'mobx';

export class CredentialsStore {

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
        this.setPassword = this.setPassword.bind(this);
        this.setLogin = this.setLogin.bind(this);
    }

    @observable
    public login: string;

    @observable
    public password: string;

    @action
    setPassword(value: string): void {
        this.password = value;
    }

    @action
    setLogin(value: string): void {
        this.login = value;
    }
}

export default CredentialsStore;
