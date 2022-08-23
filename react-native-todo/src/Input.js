import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';

const StyledInput = styled.TextInput`
    /* width: ${props => props.width-40}px; */
    width: ${({width}) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = () => {
    // const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;

    return <StyledInput width={width}/>;
};

export default Input;