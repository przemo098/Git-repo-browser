import * as React from 'react';

interface IState {
    login: string;
    password: string;
}

export default class Login extends React.Component<any, IState>{
    constructor(props) {
        super(props);

        this.state = { login: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div style={{ width: 300, margin: "0 auto", marginTop: 250 }}>
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

    async handleSubmit(event) {
        console.log("getting data");
        event.preventDefault();
        // let auth =  + new Buffer(this.state.login + ":" + this.state.password).toString("base64");

        var myHeaders = new Headers();

        myHeaders.append("Authorization", "Basic " + new Buffer(this.state.login + ":" + this.state.password).toString("base64"));


        let myInit: any = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };


        let response = await fetch('https://api.github.com/user', myInit);


        if (response.status !== 200) {
            this.wrongCredentials();
            return;
        }
        console.log("nope");
        return response.json()
            .then(json => console.log(json));


}

wrongCredentials(){
    console.log("wrong credentials");
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
}