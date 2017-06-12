import * as React from "react";

export default class Header extends React.Component<any, any>{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" />
                    <div className="collapse navbar-collapse">                        
                        <ul className="nav navbar-nav">
                            <li className="nav navbar-nav navbar-right">
                                <a href="/login">Login with gitHub</a>
                            </li>
                        </ul>
                    </div>




                </div>
            </nav>
        )
    }
}