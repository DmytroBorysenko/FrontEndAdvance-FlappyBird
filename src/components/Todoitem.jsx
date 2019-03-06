import * as React from 'react';

export class TodoItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.name}
                <button onClick={() => this.props.onRemove()}>x</button>
            </li>
        );
    }
}