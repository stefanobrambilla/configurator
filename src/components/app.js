import React, { Component } from 'react';
import { connect } from 'react-redux';
import Attribute from './attribute';

class App extends Component {

    attributesList(){

        const { dataAttributes } = this.props;

        return Object.keys(dataAttributes).map((key) => {

            return <Attribute
                key={key}
                name={key}
                type={dataAttributes[key].settings.type}
            />

        });

    }

    render() {

        return (
            <div>
                {this.attributesList()}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        dataAttributes: state.dataAttributes
    };

}

export default connect(mapStateToProps, null)(App);