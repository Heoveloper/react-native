import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { StatusBar, Dimensions } from 'react-native';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task'

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
}

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  //추가
  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject }); //객체 병합 by 스프레드 문법
  };

  //삭제
  const _deleteTask = id => {
    const currentTasks = Object.assign({}, tasks);
    // const currentTasks = [...tasks];  //객체 복사
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  //완료
  const _toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    // const currentTasks = [...tasks];  //객체 복사
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  }

  const width = Dimensions.get('window').width;

  return (
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
                  />
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}

