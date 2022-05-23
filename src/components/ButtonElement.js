import styled from 'styled-components';

import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00d4ff' : '#010606')};
    white-space: no-wrap;
    padding: 12px 48px;
    color: ${({dark}) => (dark ?  '#010606': '#fff')};
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: 400;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#00d4ff')};
    }
`