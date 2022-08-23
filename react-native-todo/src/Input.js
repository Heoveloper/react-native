import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
import theme from './theme';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(
    ({placeholder}) => ({
            placeholder: placeholder,
            placeholderTextColor: 'red',
        })
)`
    /* width: ${props => props.width-40}px; */
    width: ${({width}) => width - 40}px;
    /* height: 60px; */
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing}) => {
    const width = Dimensions.get('window').width;
    // const width = useWindowDimensions().width;

    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={true}
            returnKeyType="done"
            // keyboardAppearance="dark"   //only iOS
            // multiline={true}
            // numberOfLines={3}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

Input.defaultProps = {
    value: '기본값',
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;