import React from 'react';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
    render() {
        return (
            <h1>Welcome, {this.props.name}!</h1>
        )
    }
};

Welcome.propsTypes = {
    name: PropTypes.string.isRequired
};

Welcome.defaultProps = {
    name: 'World'
};

export default Welcome;