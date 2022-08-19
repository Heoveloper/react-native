import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity
        style={{
            backgroundColor: 'skyblue',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        // onPressIn={() => alert('onPressIn 클릭!')}
        // onPressOut={() => alert('onPressOut 클릭!')}
        onPress={() => alert('onPress 클릭!')}
        onLongPress={() => alert('onLongPress 클릭!')}
        >
            <Text style={{color: 'white', fontSize: 24, fontWeight: 900}}>My Button</Text>
        </TouchableOpacity>
    );
};

export default MyButton;