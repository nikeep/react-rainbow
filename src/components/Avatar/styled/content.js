import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_2, COLOR_GRAY_4 } from '../../../styles/colors';
import { SHADOW_1 } from '../../../styles/shadows';

const StyledContent = styled.span`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    text-shadow: ${SHADOW_1};

    &:hover {
        color: ${COLOR_WHITE};
        cursor: default;
    }

    &[title] {
        cursor: default;
        text-decoration: none;
    }

    ${props =>
        props.initialsVariant === 'inverse' &&
        `
            background-color: ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
            text-shadow: none;
        
            &:hover {
                color: ${COLOR_GRAY_4};
                cursor: default;
            }
        `};
`;

export default StyledContent;
