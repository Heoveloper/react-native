import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

const Icon = styled.Image`
    tint-color: ${({theme, completed}) => completed ? theme.done : theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

const IconButton = ({type, onPressOut, id, completed}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };
    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} completed={completed}/>
        </TouchableOpacity>
    )
};

//핸들러가 넘어오지 않더라도 오류가 발생하지 않도록 디폴트 처리
IconButton.defaultProps = {
    onPressOut: () => {},
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed: PropTypes.bool,
};

export default IconButton;