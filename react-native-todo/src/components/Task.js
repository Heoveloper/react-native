import React, {useState} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../images';
import Input from './Input';


const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({theme, completed}) => (completed ? theme.done : theme.text)};
    text-decoration-line: ${({completed}) => completed ? 'line-through' : 'none'};
`;

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    //수정버튼 클릭시
    const _hadndleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    //항목 입력 완료시
    const _onSubmitEditing = () => {
        if(isEditing) {
            const editedTask = Object.assign({}, item, {text});
            // const editedTask = {...item, text}; //text: 수정된 텍스트
            setIsEditing(false);
            updateTask(editedTask);
        }
    };

    //수정시 입력필드에서 포커스가 떠났을 때
    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    return isEditing ? (
        <Input
            value={text}
            onChangeText={text => setText(text)}    //입력필드가 수정될 때마다
            onSubmitEditing={_onSubmitEditing}      //입력 완료시
            onBlur={_onBlur}
        />
    ) : (
        <Container>
            {/* 완료버튼 */}
            <IconButton
                type={item.completed ? images.completed : images.uncompleted}
                id={item.id}
                onPressOut={toggleTask}
                completed={item.completed}
            />

            {/* 할 일 */}
            <Contents completed={item.completed}>{item.text}</Contents>

            {/* 수정버튼 */}
            {/* 완료시 수정버튼 */}
            {item.completed || (
                <IconButton
                    type={images.update}
                    onPressOut={_hadndleUpdateButtonPress}
                />
            )}

            {/* 삭제버튼 */}
            <IconButton type={images.delete}
                        id={item.id}
                        onPressOut={deleteTask}
                        completed={item.completed}
            />
        </Container>
    );
};

Task.propTypes = {
    text: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
};

export default Task;