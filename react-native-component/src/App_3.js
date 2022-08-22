import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EventButton from './components/EventButton';

const App = () => {

    return (
        <View style={styles.container}>
            <EventButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;