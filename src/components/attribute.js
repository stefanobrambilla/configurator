import React, { Component } from 'react';
import { connect } from 'react-redux';

import Text from './typeAttributes/text';

class Attribute extends Component {
    constructor(props){
        super(props);
    }

    render() {

        const { name, type } = this.props;

        return (
            <div>
                {
                    type == 'text' ? (

                        <Text
                            name={name}
                        />

                    ):( false )
                }
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        dataAttributes: state.dataAttributes
    };

}

export default connect(mapStateToProps, null)(Attribute);