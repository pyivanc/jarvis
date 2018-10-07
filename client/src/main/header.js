import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    grid-area: header;
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.background};
`;

const Title = styled.div`

`;

export default () => (
    <Header>
        <Title>Jarvis</Title>
    </Header>
);