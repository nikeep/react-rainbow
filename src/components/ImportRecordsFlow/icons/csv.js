import React from 'react';
import PropTypes from 'prop-types';

export default function Csv(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="49px"
            height="56px"
            viewBox="0 0 49 56"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Import-File" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="importing-file-3" transform="translate(-409.000000, -291.000000)">
                    <g id="Group-10">
                        <g id="Group-31">
                            <g id="Group-21">
                                <g id="Group-20">
                                    <g id="Group-23">
                                        <g id="csv" transform="translate(409.000000, 291.000000)">
                                            <path
                                                d="M4.4625,-3.55271368e-15 C2.0125,-3.55271368e-15 0,2.0125 0,4.4625 L0,51.5375 C0,53.9875 2.0125,56 4.4625,56 L44.5375,56 C46.9875,56 49,53.9875 49,51.5375 L49,17.7625 L32.375,-3.55271368e-15 L4.4625,-3.55271368e-15 Z"
                                                fill="#2EC4B6"
                                            />
                                            <path
                                                d="M17.7625,37.8 C17.85,37.8875 17.9375,38.0625 17.9375,38.2375 C17.9375,38.5875 17.675,38.85 17.325,38.85 C17.15,38.85 16.975,38.85 16.8875,38.675 C16.275,37.975 15.225,37.45 14.2625,37.45 C11.9875,37.45 10.2375,39.2 10.2375,41.7375 C10.2375,44.1875 11.9875,46.025 14.2625,46.025 C15.225,46.025 16.1875,45.5875 16.8875,44.8 C16.975,44.7125 17.15,44.625 17.325,44.625 C17.675,44.625 17.9375,44.8875 17.9375,45.2375 C17.9375,45.4125 17.85,45.5875 17.7625,45.675 C16.975,46.55 15.8375,47.1625 14.2625,47.1625 C11.2,47.1625 8.8375,44.975 8.8375,41.7375 C8.8375,38.5 11.2,36.3125 14.2625,36.3125 C15.8375,36.3125 16.975,36.925 17.7625,37.8 Z M23.7125,47.1625 C22.1375,47.1625 20.9125,46.6375 20.0375,45.85 C19.8625,45.7625 19.8625,45.5875 19.8625,45.4125 C19.8625,45.0625 20.0375,44.7125 20.475,44.7125 C20.5625,44.7125 20.7375,44.8 20.825,44.8875 C21.525,45.5 22.575,46.025 23.8,46.025 C25.6375,46.025 26.25,44.975 26.25,44.1875 C26.25,41.475 20.0375,42.9625 20.0375,39.2 C20.0375,37.5375 21.525,36.3125 23.625,36.3125 C24.9375,36.3125 26.1625,36.75 27.0375,37.45 C27.125,37.5375 27.2125,37.7125 27.2125,37.8875 C27.2125,38.2375 26.95,38.5 26.6,38.5 C26.5125,38.5 26.3375,38.5 26.25,38.4125 C25.4625,37.8 24.5,37.45 23.5375,37.45 C22.225,37.45 21.35,38.15 21.35,39.1125 C21.35,41.475 27.5625,40.1625 27.5625,44.1 C27.5625,45.5875 26.5125,47.1625 23.7125,47.1625 Z M38.5875,37.3625 L34.9125,46.375 C34.7375,46.8125 34.3875,47.075 33.95,47.075 L33.8625,47.075 C33.425,47.075 32.9875,46.8125 32.8125,46.375 L29.225,37.3625 C29.1375,37.275 29.1375,37.1875 29.1375,37.1 C29.1375,36.75 29.4,36.4 29.8375,36.4 C30.1,36.4 30.3625,36.575 30.45,36.8375 L33.8625,45.5875 L37.275,36.8375 C37.3625,36.575 37.625,36.4 37.8875,36.4 C38.325,36.4 38.675,36.75 38.675,37.1 C38.675,37.1875 38.5875,37.275 38.5875,37.3625 L38.5875,37.3625 Z"
                                                id="Shape"
                                                fill="#FFFFFF"
                                                fillRule="nonzero"
                                            />
                                            <g
                                                id="Group"
                                                transform="translate(32.375000, 0.000000)"
                                                fillRule="nonzero"
                                            >
                                                <path
                                                    d="M16.625,17.85 L16.625,18.725 L5.425,18.725 C5.425,18.725 -0.0875,17.5875 0.0875,12.775 C0.0875,12.775 0.2625,17.85 5.3375,17.85 L16.625,17.85 Z"
                                                    fillOpacity="0.17578125"
                                                    fill="#131313"
                                                />
                                                <path
                                                    d="M0.0875,0 L0.0875,12.775 C0.0875,14.175 1.05,17.85 5.425,17.85 L16.625,17.85 L0.0875,0 Z"
                                                    fill="#FFFFFF"
                                                    opacity="0.5"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Csv.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

Csv.defaultProps = {
    style: undefined,
    className: undefined,
};
