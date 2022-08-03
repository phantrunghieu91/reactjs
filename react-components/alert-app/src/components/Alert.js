import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
    render () {
        return (
            <div className={`alert alert-${this.props.text}`} role='alert'>
                {`This is a ${this.props.text} alert---check it out!`}
            </div>
        );
    }
};

Alert.propTypes = {
    text: PropTypes.string.isRequired
};

Alert.defaultProps = {
    text: 'primary'
};

export default Alert;