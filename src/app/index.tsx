import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from './containers/App';
// import { TodoApp } from './containers/TodoApp';
import { GitHubApp } from './containers/GitRepoApp'
import { GitHubModel } from './models';
import { RouterStore, GitHubStore } from './stores';
import { STORE_ROUTER, GITHUB_STORE } from './constants/stores';
// import { TodoFilter } from './constants/todos';

import { Owner } from './api/gitHubResponse';

// enable MobX strict mode
useStrict(true);

// default fixtures for TodoStore
// const defaultTodos = [
//   new TodoModel('Use Mobx'),
//   new TodoModel('Use React', true),
// ];

class OwnerClass implements Owner {  
login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;


}

const defaultGitHub = [
  new GitHubModel(12, "lol", new OwnerClass(), 32, new Date())
]

// prepare MobX stores
// const todoStore = new TodoStore(defaultTodos);
const routerStore = new RouterStore(browserHistory);
const rootStores = {
  // [STORE_TODO]: todoStore,
  [STORE_ROUTER]: routerStore,
  [GITHUB_STORE]: new GitHubStore(defaultGitHub)
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores} >
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={GitHubApp} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('root')
);