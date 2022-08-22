import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


const MyButton = (props) => {
    console.log(props);
    return (
        <TouchableOpacity
        style={{
            backgroundColor: 'skyblue',
            paddingHorizontal: props.demension.width,
            paddingVertical: props.demension.height,
            margin: 10,
            borderRadius: 8,
        }}

        activeOpacity={0.7}
        onPress={props.onPress}
        // onPress={() => alert('onPress 클릭!')}
        // onLongPress={() => alert('onLongPress 클릭!')}
        // onPressIn={() => alert('onPressIn 클릭!')}
        // onPressOut={() => alert('onPressOut 클릭!')}
        // accessibilityRole={'checkbox'}
        // accessible={false}
        >
        {/* <Image
            source={require('../../assets/icon/icon.png')}
            style={{width: 80, height: 80}}
        >
        </Image> */}
            <Text style={{fontSize: props.fsize}}>
                {props.title ?? props.children}
            </Text>
        </TouchableOpacity>
    );
};
MyButton.defaultProps = {
    demension: {
        width: 10, height: 10
    },

    title: '임시'
}
MyButton.propTypes = {
    demension: PropTypes.object.isRequired,
    title: PropTypes.string
}

export default MyButton;