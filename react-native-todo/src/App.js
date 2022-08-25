import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { StatusBar, Dimensions } from 'react-native';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  /* background-color: ${props => props.theme.background}; */
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

const tmpData = {
  '1': {id: '1', text: '자바', completed: false},
  '2': {id: '2', text: '데이터베이스', completed: true},
  '3': {id: '3', text: '스프링', completed: false},
  '4': {id: '4', text: '리액트 네이티브', completed: false},
};

export default function App() {
  const [isReady, setIsReady] = useState(false);  //앱 실행 준비 상태
  const [newTask, setNewTask] = useState('');     //새로운 항목
  const [tasks, setTasks] = useState({});         //항목 리스트

  //로컬저장소에 데이터 저장하기
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      setTasks(value);
    } catch (e) {
      // saving error
    }
  }

  //로컬저장소에 데이터 가져오기
  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      const tasks = jsonValue != null ? JSON.parse(jsonValue) : {};
      setTasks(tasks);
    } catch(e) {
      // error reading value
    }
  }

  //로컬저장소 삭제 by key
  const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch(e) {
      // remove error
    }
  }

  //전체 삭제
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch(e) {
      // clear error
    }
  }

  //추가
  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    // setTasks({ ...tasks, ...newTaskObject }); //객체 병합 by 스프레드 문법
    storeData('tasks', {...tasks, ...newTaskObject});  //로컬저장소에 저장    
  };
  
  const _handleTextChange = (text) => {
    setNewTask(text);
  }

  //삭제
  const _deleteTask = id => {
    const currentTasks = Object.assign({}, tasks);
    // const currentTasks = {...tasks};  //객체 복사
    delete currentTasks[id];
    // setTasks(currentTasks); //tasks = currentTasks;
    storeData('tasks', currentTasks);  //로컬저장소에 저장
  };

  //완료
  const _toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    // const currentTasks = {...tasks};  //객체 복사
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    // setTasks(currentTasks); //tasks = currentTasks;
    storeData('tasks', currentTasks);  //로컬저장소에 저장
  };

  //수정
  const _updateTask = item => {
    const currentTasks = Object.assign({}, tasks);
    // const currentTasks = {...tasks};  //객체 복사
    currentTasks[item.id] = item;       //수정 항목
    // setTasks(currentTasks); //tasks = currentTasks;
    storeData('tasks', currentTasks);  //로컬저장소에 저장
  };


  //입력필드에서 포커스가 떠났을 때
  const _onBlur = () => {
    setNewTask('');
  }

  const width = Dimensions.get('window').width;

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO LIST</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <List width={width}>
          {Object.values(tasks)
                 .reverse()
                 .map(item => (
                  <Task key={item.id}
                        text={item.text}
                        item={item}
                        deleteTask={_deleteTask}
                        toggleTask={_toggleTask}
                        updateTask={_updateTask}
                  />
          ))}
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      //앱 로딩 전 실행할 로직    
      startAsync={()=>{getData('tasks')}}
      //startAsync호출이 성공적으로 수행되면
      onFinish={() => setIsReady(true)}
      //startAsync호출이 실패하면
      onError={console.warn}
    />
  );
}

