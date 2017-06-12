import * as React from 'react';
import Header from '../../components/header';

export class App extends React.Component<any, any> {

  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
};
