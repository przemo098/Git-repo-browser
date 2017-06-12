import * as React from 'react';
import GitHubApi from '../../api/gitHubApi';
import GitHubModel from '../../models/GitHubModel'
import { GITHUB_STORE, STORE_ROUTER } from '../../constants/stores';
import { inject, observer } from 'mobx-react'
import { GitHubStore } from '../../stores'
import * as ResponseModel from '../../api/gitHubResponse';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';



@inject(GITHUB_STORE, STORE_ROUTER)
@observer
export default class GitHubApp extends React.Component<any, any>{

    constructor(props: any, context: any) {
        super(props, context);
        this.state = { repositories: null, searchString: "", rowPerPage: "5" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRowCountChange = this.handleRowCountChange.bind(this);
        this.redirectToGitHub = this.redirectToGitHub.bind(this);
        this.saveLocally = this.saveLocally.bind(this);
    }

    render() {
        return (
            <div style={{ height: 200 }} className="ag-fresh">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" name="name" value={this.state.searchString} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <AgGridReact
                    columnDefs={[{ "headerName": "createdAt", "field": "createdAt", "width": 100 }, { "headerName": "id", "field": "id", "width": 100 }, { "headerName": "owner", "field": "owner", "width": 100 }, { "headerName": "repoTitle", "field": "repoTitle", "width": 100 }, { "headerName": "stars", "field": "stars", "width": 100 }]}
                    rowData={this.state.repositories}
                    pagination={true}
                    paginationPageSize={this.state.rowPerPage}
                    enableSorting={true}

                />

                <label>
                    Row count:
                    <select value={this.state.rowPerPage} onChange={this.handleRowCountChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </label>

                <div>
                    <button onClick={this.redirectToGitHub}>Login with GitHub </button>
                </div>
            </div>)
    }

    redirectToGitHub() {
        window.location.replace("http://github.com/login/oauth/authorize");
    }

    handleChange(event) {
        this.setState({ searchString: event.target.value });
    }

    handleRowCountChange(event) {
        this.setState({ rowPerPage: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getData()
        this.saveLocally();
    }

    saveLocally() {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.state.searchString, JSON.stringify(this.state.repositories));
        } else {
            alert("Your browser does not support local local storage, please upgrade browser!!")
        }
    }

    getData() {
        try {
            let localData = localStorage.getItem(this.state.searchString)
            this.setState({repositories: JSON.parse(localData)});            
        }
        catch (excpetion) {
            //load from web
            const gitHubStore = this.props[GITHUB_STORE] as GitHubStore;
            GitHubApi(this.state.searchString).then((json: ResponseModel.GitHubResponse) => json.items)
                .then((items: ResponseModel.Item[]) =>
                    items.map((item) => {
                        let zmienna = new GitHubModel(item.id, item.name, item.owner.login, item.stargazers_count, item.created_at);
                        gitHubStore.addRepo(zmienna);
                    })).then(
                () => this.setState({ repositories: this.props.github.repositories.peek() })
                );
        }
    }
}