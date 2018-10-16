import React from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.div``;

export default ({data}) => (
    <StyledTodoItem>
        { data.title }
    </StyledTodoItem>
)