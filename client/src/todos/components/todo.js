import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import TodoItem from './todo-item';

const StyledTodo = styled.div`
    background-color: ${({theme}) => theme.pallete.yellow};
    padding: 10px;
    border-radius: 5px;
    min-width: 200px
`;

const StyledHeader = styled.div`
    padding-bottom: 5px;
    margin-bottom: 5px;
    font-size: 1.2em;
    border-bottom: 1px solid ${({theme}) => theme.pallete.black};
`;

const StyledChecked = styled.div`
`;

export default ({data}) => {
    const checkIcon = data.checked ? faCheckSquare : faSquare;
    return (
        <StyledTodo>
            <StyledHeader>
                {data.title}
                <StyledChecked>
                    <FontAwesomeIcon icon={checkIcon} />
                </StyledChecked>
            </StyledHeader>
            { data.items.map(i => <TodoItem data={i} />)}
        </StyledTodo>
    );
}