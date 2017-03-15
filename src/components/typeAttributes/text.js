import React, { Component } from 'react';
import { connect } from 'react-redux';

class Text extends Component {
    constructor(props){
        super(props);
    }

    render() {

        const { name } = this.props;

        return (
            <div>
                {name}
            </div>
        );
    }
}

export default Text;