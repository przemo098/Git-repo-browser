import * as React from "react";
import { inject, observer } from 'mobx-react'
import { CREDENTIALS_STORE } from '../constants/stores';


@inject(CREDENTIALS_STORE)
@observer
export default class Header extends React.Component<any, any> {
    constructor(props) {
        super(props);

    }



    render() {
        let store = this.props[CREDENTIALS_STORE];

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" />
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav navbar-nav navbar-right">
                                {store.login !== "" ? <a href="#">Welcome {store.login}</a>
                                    : <a href="/login">Login with gitHub</a>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
