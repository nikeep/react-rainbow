import React from 'react';
import PropTypes from 'prop-types';

export default function CloseIcon(props) {
    const { className, style, color } = props;
    return (
        <svg
            className={className}
            style={style}
            fill={color}
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
        >
            <path d="M9.40933333,7.99533333 L15.6973333,1.70733333 C16.088,1.317 16.088,0.683666667 15.6973333,0.293333333 C15.3066667,-0.0973333333 14.674,-0.0973333333 14.2833333,0.293333333 L7.99533333,6.58133333 L1.707,0.293333333 C1.31633333,-0.0973333333 0.683666667,-0.0973333333 0.293,0.293333333 C-0.0976666667,0.683666667 -0.0976666667,1.317 0.293,1.70733333 L6.58133333,7.99533333 L0.293,14.2833333 C-0.0976666667,14.6736667 -0.0976666667,15.307 0.293,15.6973333 C0.488333333,15.8923333 0.744333333,15.99 1,15.99 C1.25566667,15.99 1.51166667,15.8923333 1.707,15.697 L7.99533333,9.409 L14.2833333,15.697 C14.4786667,15.8923333 14.7346667,15.99 14.9903333,15.99 C15.246,15.99 15.502,15.8923333 15.6973333,15.697 C16.088,15.3066667 16.088,14.6733333 15.6973333,14.283 L9.40933333,7.99533333 Z" />
        </svg>
    );
}

CloseIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
};

CloseIcon.defaultProps = {
    className: undefined,
    style: undefined,
    color: '#01b6f5',
};
