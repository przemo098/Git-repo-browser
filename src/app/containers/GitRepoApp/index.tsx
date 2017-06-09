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
    }

    render() {
        console.log(this.state);
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
            </div>)
    }

    handleChange(event) {
        this.setState({ searchString: event.target.value });
    }

    handleRowCountChange(event) {
        console.log(event.target.value);
        this.setState({ rowPerPage: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.searchString)
        this.getData()
    }

    getData() {
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