import * as React from 'react';
import GitHubApi from '../../api/gitHubApi';
import GitHubModel from '../../models/GitHubModel'
import { GITHUB_STORE, CREDENTIALS_STORE } from '../../constants/stores';
import { inject, observer } from 'mobx-react'
import { GitHubStore } from '../../stores'
import * as ResponseModel from '../../api/gitHubResponse';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';



@inject(GITHUB_STORE, CREDENTIALS_STORE)
@observer
export default class GitHubApp extends React.Component<any, any> {

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
                    columnDefs={[{ "headerName": "createdAt", "field": "createdAt", "width": 100 }, { "headerName": "id", "field": "id", "width": 100 },
                    { "headerName": "owner", "field": "owner", "width": 100 }, { "headerName": "repoTitle", "field": "repoTitle", "width": 100 },
                    { "headerName": "stars", "field": "stars", "width": 100 }]}
                    rowData={this.state.repositories}
                    pagination={true}
                    paginationPageSize={this.state.rowPerPage}
                    enableSorting={true}
                    getRowStyle={(params) => {
                        if (params.data.owner === this.props[CREDENTIALS_STORE].login) {
                            return { 'background-color': 'yellow' };
                        }
                    }}
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

    async getData() {
        const gitHubStore = this.props[GITHUB_STORE] as GitHubStore;
        gitHubStore.clean();
        console.log(gitHubStore.repositories);

        try {
            console.log("loadign local");

            let localData = localStorage.getItem(this.state.searchString);
            if (localData === null || localData === "null" || localData.length === 0 || localData === "[]") {
                throw "No local data"
            }
            console.log(JSON.parse(localData));

            this.setState({ repositories: JSON.parse(localData) });
        } catch (excpetion) {
            console.log("loadign form web");
            //load from web
            let response: ResponseModel.GitHubResponse = await GitHubApi(this.state.searchString);

            response.items.map(item => {
                let repo = new GitHubModel(item.id, item.name, item.owner.login, item.stargazers_count, item.created_at);
                gitHubStore.addRepo(repo);
            });
            this.setState({ repositories: this.props.github.repositories.peek() });
        }
    }
}
