import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { StatusBar } from 'react-native';
import Input from './Input';

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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO LIST</Title>
        <Input/>
      </Container>
    </ThemeProvider>
  );
}

