import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Counter from "./components/Counter";

const App = () => {

    return (
        <View style={styles.container}>
            <Counter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;