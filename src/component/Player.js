import React from 'react';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
       
        return(<h5>{this.props.name}</h5>);
    }
}
Player.propTypes = {
    name:PropTypes.string
}
Player.defaultProps = {
    name:"Props not passed"
}