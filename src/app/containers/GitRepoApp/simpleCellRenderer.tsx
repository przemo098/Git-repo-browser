import * as React from 'react';

export default class SimpleCellRenderer extends React.Component<any, any> {
    render() {
        // the class below does nothing, it's just for testing, so we can inspect the dom of
        // the result and looking for it, to validate that this cellRenderer is actually getting used.
        return (
            <span className="simple-cell-renderer">{this.props.value}</span>
        );
    }
}

