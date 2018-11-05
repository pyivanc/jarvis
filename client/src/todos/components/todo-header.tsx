import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { EditableInput } from '../../common';

const Title = styled.h5`
    display: flex;
    text-decoration: ${(props: TitleProps) => props.isChecked ? 'line-through' : 'none'};
    align-items: center;
`;

const TitleText = styled.div`
    flex: 1;
    height: 30px;
`;

const DeleteIcon = styled.div`
    margin-right: 10px;
`;

const CheckIcon = styled.div`
    margin-left: 10px;
`


interface TitleProps {
    isChecked: boolean;
}

interface PropTypes {
    title: string;
    onToggle: any;
    isChecked: boolean;
    onChange: (value: string) => any;
    onDelete: (event: any) => any;
}

class TodoHeader extends React.Component<PropTypes, any> {
    
    render() {
        const { title, onToggle, isChecked, onChange, onDelete } = this.props;
        const checkIcon: IconProp = isChecked ? faCheckSquare : faSquare;

        return (
            <Title className="card-title" isChecked={isChecked}>
                <DeleteIcon onClick={onDelete}>
                    <button className="btn btn-link text-danger">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </DeleteIcon>
                <TitleText>
                    <EditableInput value={title} onSubmit={onChange}></EditableInput>
                </TitleText>
                <CheckIcon onClick={onToggle}>
                    <FontAwesomeIcon icon={checkIcon} />
                </CheckIcon>
            </Title>
        );
    }
}

export default TodoHeader;
