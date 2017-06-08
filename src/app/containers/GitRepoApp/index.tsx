
// const css = require('ag-grid/dist/styles/theme-fresh.css')
// const css = require('ag-grid/dist/styles/ag-grid.css';
import * as React from 'react';
// import GitHubApi from '../../api/gitHubApi';
// import GitHubModel from '../../models/GitHubModel'
// import { GITHUB_STORE, STORE_ROUTER } from '../../constants/stores';
// import { inject, observer } from 'mobx-react'
// import { GitHubStore } from '../../stores'
// import * as ResponseModel from '../../api/gitHubResponse';
import { AgGridReact } from 'ag-grid-react';


import SimpleCellRenderer from './simpleCellRenderer';


import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';



// @inject(GITHUB_STORE, STORE_ROUTER)
// @observer
export class GitHubApp extends React.Component<any, any>{

    render() {

        // const gitHubStore = this.props[GITHUB_STORE] as GitHubStore;
        // GitHubApi("tetris").then((json: ResponseModel.GitHubResponse) => json.items)
        //     .then((items: ResponseModel.Item[]) =>
        //         items.map((item) => {
        //             let zmienna = new GitHubModel(item.id, item.name, item.owner, item.stargazers_count, item.created_at);
        //             gitHubStore.addRepo(zmienna);
        //         }));
        console.log("lol");
        console.log(JSON.stringify(this.state.columnDefs));
        // console.log(this.state.rowData);


        return (
            <div style={{ height: '100%' }} className="ag-fresh">

                Hello world




                    <AgGridReact


                    columnDefs={[{ "headerName": "A", "field": "a", "width": 100 }, { "headerName": "B", "field": "b", "width": 100 }, { "headerName": "C", "field": "c", "width": 100 }, { "headerName": "D", "field": "d", "width": 100 }, { "headerName": "E", "field": "e", "width": 100 }, { "headerName": "F", "field": "f", "width": 100 }, { "headerName": "G", "field": "g", "width": 100 }, { "headerName": "H", "field": "h", "width": 100 }, { "headerName": "I", "field": "i", "width": 100 }, { "headerName": "J", "field": "j", "width": 100 }, { "headerName": "K", "field": "k", "width": 100 }, { "headerName": "L", "field": "l", "width": 100 }, { "headerName": "M", "field": "m", "width": 100 }, { "headerName": "N", "field": "n", "width": 100 }, { "headerName": "O", "field": "o", "width": 100 }, { "headerName": "P", "field": "p", "width": 100 }, { "headerName": "Q", "field": "q", "width": 100 }, { "headerName": "R", "field": "r", "width": 100 }, { "headerName": "S", "field": "s", "width": 100 }, { "headerName": "T", "field": "t", "width": 100 }, { "headerName": "U", "field": "u", "width": 100 }, { "headerName": "V", "field": "v", "width": 100 }, { "headerName": "W", "field": "w", "width": 100 }, { "headerName": "X", "field": "x", "width": 100 }, { "headerName": "Y", "field": "y", "width": 100 }, { "headerName": "Z", "field": "z", "width": 100 }]}
                    rowData={[{ "a": "(A,0)", "b": "(B,0)", "c": "(C,0)", "d": "(D,0)", "e": "(E,0)", "f": "(F,0)", "g": "(G,0)", "h": "(H,0)", "i": "(I,0)", "j": "(J,0)", "k": "(K,0)", "l": "(L,0)", "m": "(M,0)", "n": "(N,0)", "o": "(O,0)", "p": "(P,0)", "q": "(Q,0)", "r": "(R,0)", "s": "(S,0)", "t": "(T,0)", "u": "(U,0)", "v": "(V,0)", "w": "(W,0)", "x": "(X,0)", "y": "(Y,0)", "z": "(Z,0)" }, { "a": "(A,1)", "b": "(B,1)", "c": "(C,1)", "d": "(D,1)", "e": "(E,1)", "f": "(F,1)", "g": "(G,1)", "h": "(H,1)", "i": "(I,1)", "j": "(J,1)", "k": "(K,1)", "l": "(L,1)", "m": "(M,1)", "n": "(N,1)", "o": "(O,1)", "p": "(P,1)", "q": "(Q,1)", "r": "(R,1)", "s": "(S,1)", "t": "(T,1)", "u": "(U,1)", "v": "(V,1)", "w": "(W,1)", "x": "(X,1)", "y": "(Y,1)", "z": "(Z,1)" }, { "a": "(A,2)", "b": "(B,2)", "c": "(C,2)", "d": "(D,2)", "e": "(E,2)", "f": "(F,2)", "g": "(G,2)", "h": "(H,2)", "i": "(I,2)", "j": "(J,2)", "k": "(K,2)", "l": "(L,2)", "m": "(M,2)", "n": "(N,2)", "o": "(O,2)", "p": "(P,2)", "q": "(Q,2)", "r": "(R,2)", "s": "(S,2)", "t": "(T,2)", "u": "(U,2)", "v": "(V,2)", "w": "(W,2)", "x": "(X,2)", "y": "(Y,2)", "z": "(Z,2)" }, { "a": "(A,3)", "b": "(B,3)", "c": "(C,3)", "d": "(D,3)", "e": "(E,3)", "f": "(F,3)", "g": "(G,3)", "h": "(H,3)", "i": "(I,3)", "j": "(J,3)", "k": "(K,3)", "l": "(L,3)", "m": "(M,3)", "n": "(N,3)", "o": "(O,3)", "p": "(P,3)", "q": "(Q,3)", "r": "(R,3)", "s": "(S,3)", "t": "(T,3)", "u": "(U,3)", "v": "(V,3)", "w": "(W,3)", "x": "(X,3)", "y": "(Y,3)", "z": "(Z,3)" }, { "a": "(A,4)", "b": "(B,4)", "c": "(C,4)", "d": "(D,4)", "e": "(E,4)", "f": "(F,4)", "g": "(G,4)", "h": "(H,4)", "i": "(I,4)", "j": "(J,4)", "k": "(K,4)", "l": "(L,4)", "m": "(M,4)", "n": "(N,4)", "o": "(O,4)", "p": "(P,4)", "q": "(Q,4)", "r": "(R,4)", "s": "(S,4)", "t": "(T,4)", "u": "(U,4)", "v": "(V,4)", "w": "(W,4)", "x": "(X,4)", "y": "(Y,4)", "z": "(Z,4)" }, { "a": "(A,5)", "b": "(B,5)", "c": "(C,5)", "d": "(D,5)", "e": "(E,5)", "f": "(F,5)", "g": "(G,5)", "h": "(H,5)", "i": "(I,5)", "j": "(J,5)", "k": "(K,5)", "l": "(L,5)", "m": "(M,5)", "n": "(N,5)", "o": "(O,5)", "p": "(P,5)", "q": "(Q,5)", "r": "(R,5)", "s": "(S,5)", "t": "(T,5)", "u": "(U,5)", "v": "(V,5)", "w": "(W,5)", "x": "(X,5)", "y": "(Y,5)", "z": "(Z,5)" }, { "a": "(A,6)", "b": "(B,6)", "c": "(C,6)", "d": "(D,6)", "e": "(E,6)", "f": "(F,6)", "g": "(G,6)", "h": "(H,6)", "i": "(I,6)", "j": "(J,6)", "k": "(K,6)", "l": "(L,6)", "m": "(M,6)", "n": "(N,6)", "o": "(O,6)", "p": "(P,6)", "q": "(Q,6)", "r": "(R,6)", "s": "(S,6)", "t": "(T,6)", "u": "(U,6)", "v": "(V,6)", "w": "(W,6)", "x": "(X,6)", "y": "(Y,6)", "z": "(Z,6)" }, { "a": "(A,7)", "b": "(B,7)", "c": "(C,7)", "d": "(D,7)", "e": "(E,7)", "f": "(F,7)", "g": "(G,7)", "h": "(H,7)", "i": "(I,7)", "j": "(J,7)", "k": "(K,7)", "l": "(L,7)", "m": "(M,7)", "n": "(N,7)", "o": "(O,7)", "p": "(P,7)", "q": "(Q,7)", "r": "(R,7)", "s": "(S,7)", "t": "(T,7)", "u": "(U,7)", "v": "(V,7)", "w": "(W,7)", "x": "(X,7)", "y": "(Y,7)", "z": "(Z,7)" }, { "a": "(A,8)", "b": "(B,8)", "c": "(C,8)", "d": "(D,8)", "e": "(E,8)", "f": "(F,8)", "g": "(G,8)", "h": "(H,8)", "i": "(I,8)", "j": "(J,8)", "k": "(K,8)", "l": "(L,8)", "m": "(M,8)", "n": "(N,8)", "o": "(O,8)", "p": "(P,8)", "q": "(Q,8)", "r": "(R,8)", "s": "(S,8)", "t": "(T,8)", "u": "(U,8)", "v": "(V,8)", "w": "(W,8)", "x": "(X,8)", "y": "(Y,8)", "z": "(Z,8)" }, { "a": "(A,9)", "b": "(B,9)", "c": "(C,9)", "d": "(D,9)", "e": "(E,9)", "f": "(F,9)", "g": "(G,9)", "h": "(H,9)", "i": "(I,9)", "j": "(J,9)", "k": "(K,9)", "l": "(L,9)", "m": "(M,9)", "n": "(N,9)", "o": "(O,9)", "p": "(P,9)", "q": "(Q,9)", "r": "(R,9)", "s": "(S,9)", "t": "(T,9)", "u": "(U,9)", "v": "(V,9)", "w": "(W,9)", "x": "(X,9)", "y": "(Y,9)", "z": "(Z,9)" }]}


                />
            </div>)
    }
}