import React from 'react';
import {View, Text} from 'react-native';
import styled, {css} from 'styled-components/native';

const common = css`
    background-color: ${({style}) => style.bgColor};
    flex: ${({style}) => style.flex};
    color: ${({style}) => style.color};
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const StyledHeader = styled.View`
    ${common}
`;
const StyledContents = styled.View`
    ${common}
`;
const StyledFooter = styled.View`
    ${common}
`;

const Header = ({style}) => {
    return (
        <StyledHeader style={style}>
            Header
        </StyledHeader>
    )
};

const Contents = ({style}) => {
    return (
        <StyledContents style={style}>
            Contents
        </StyledContents>
    )
};

const Footer = ({style}) => {
    return (
        <StyledFooter style={style}>
            Footer
        </StyledFooter>
    )
};

export {Header, Contents, Footer}