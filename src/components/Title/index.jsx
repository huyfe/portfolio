import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Title.propTypes = {

};

function Title(props) {
    return (
        <div className="title">
            <h2 className="title__sub-title">{props.subTitle}</h2>
            <h3 className="title__title" style={{ color: props.colorTitle }}>{props.title}</h3>
        </div>
    );
}

export default Title;