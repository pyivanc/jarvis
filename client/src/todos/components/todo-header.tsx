import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TitleProps {
    isChecked: boolean;
}

const Title = styled.h5`
    display: flex;
    text-decoration: ${(props: TitleProps) => props.isChecked ? 'line-through' : 'none'}
`;

const TitleText = styled.div`
    flex: 1;
`;

interface PropTypes {
    title: string;
    onToggle: any;
    isChecked: boolean;
}

class TodoHeader extends React.Component<PropTypes, any> {
    
    render() {
        const { title, onToggle, isChecked } = this.props;
        const checkIcon: IconProp = isChecked ? faCheckSquare : faSquare;

        return (
            <Title className="card-title" isChecked={isChecked}>
                <TitleText>{ title }</TitleText>
                <div onClick={onToggle}>
                    <FontAwesomeIcon icon={checkIcon} />
                </div>
            </Title>
        );
    }
}

export default TodoHeader;
