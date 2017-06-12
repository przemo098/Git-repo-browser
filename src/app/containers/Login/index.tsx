import { inject, observer } from 'mobx-react';
import { GITHUB_STORE, CREDENTIALS_STORE } from '../../constants/stores';
import { CredentialsStore } from '../../stores';
import { browserHistory } from 'react-router';


import * as React from 'react';

interface IState {
    login: string;
    password: string;
    incorrectCredentials: boolean;
}

@inject(GITHUB_STORE, CREDENTIALS_STORE)
@observer
export default class Login extends React.Component<any, IState> {
    constructor(props) {
        super(props);

        this.state = { login: "", password: "", incorrectCredentials: false }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div style={{ width: 300, margin: "0 auto", marginTop: 250 }}>

                {this.state.incorrectCredentials ? this.errorMsg : ""}

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input value={this.state.login} onChange={this.handleChange} type="login" className="form-control" id="login" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passowrd">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }

    errorMsg = <div className="alert alert-danger">
        <strong>Error!</strong> Credentials are incorrect, please provide different!!
                </div>;

    async handleSubmit(event) {
        event.preventDefault();

        let response = await fetch('https://api.github.com/user', this.requestInit());

        if (response.status !== 200) {
            this.wrongCredentials();
            return;
        }


        let store = this.props[CREDENTIALS_STORE] as CredentialsStore
        store.setLogin(this.state.login);
        store.setPassword(this.state.password);
        browserHistory.push('/');

    }

    wrongCredentials() {
        this.setState({ incorrectCredentials: true });
    }

    handleChange(event: any) {
        switch (event.target.id) {
            case "login":
                this.setState({ login: event.target.value });
                break;
            case "password":
                this.setState({ password: event.target.value })
                break;
        }
    }

    private requestInit() {
        let myHeaders = new Headers();

        myHeaders.append("Authorization", "Basic " + new Buffer(this.state.login + ":" + this.state.password).toString("base64"));

        let myInit: any = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return myInit;
    }

}
