import React from 'react';
import PropTypes from 'prop-types';

Spacing.propTypes = {

};

function Spacing(props) {
    return (
        <>
            <div className="d-lg-block d-md-none d-none" style={{ height: props.dH }}></div>
            <div className="d-lg-none d-md-block d-none" style={{ height: props.tH }}></div>
            <div className="d-lg-none d-md-none d-block" style={{ height: props.mH }}></div>
        </>
    );
}

export default Spacing;