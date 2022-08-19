import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton';

const App = () => {
    let i = 0;
    const fsize = {
        [`level${++i}`]: 10,
        [`level${++i}`]: 15,
        [`level${++i}`]: 20,
        [`level${++i}`]: 25,
    }
    const demension = [
        {width: 10, height: 10},
        {width: 20, height: 20},
        {width: 30, height: 30},
        {width: 40, height: 40},
    ];

    console.log(fsize, demension);

    const save_h = () => {console.log('수정')}
    const list_h = () => {console.log('저장')}
    const delete_h = () => {console.log('목록')}
    const update_h = () => {console.log('삭제')}

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>아이디</Text>
                <TextInput style={styles.input} /> 
            </View>
            <Text style={styles.myFont}>My Button components</Text>
            <StatusBar style='auto' />
            <View style={styles.container2}>
                <MyButton
                    title='수정'
                    fsize={fsize.level1}
                    demension={demension[0]}
                    onPress = {update_h}
                >
                    수정하기
                </MyButton>
                <MyButton
                    title='저장'
                    fsize={fsize.level2}
                    demension={demension[1]}
                    onPress={save_h}
                />
                <MyButton
                    title='목록'
                    fsize={fsize.level3}
                    demension={demension[2]}
                    onPress={list_h}
                />
                <MyButton
                    title='삭제'
                    fsize={fsize.level4}
                    demension={demension[3]}
                    onPress={delete_h}
                />
            </View>
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
    myFont: {
        fontSize: 30,
        marginBottom: 10,
    },
    container2: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        padding: 10,
        margin: 12,
        borderWidth: 1,
    }
});

export default App;