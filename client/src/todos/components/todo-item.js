import React from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.div``;

const TodoItemComponent = ({ data }) => (
    <StyledTodoItem>
        { data.title }
    </StyledTodoItem>
);

export default TodoItemComponent;
