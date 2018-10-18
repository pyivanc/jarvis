import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    grid-area: header;
    display: grid;
    align-items: center;
    background-color: ${({theme}) => theme.pallete.black};
    color: ${({theme}) => theme.pallete.white};
`;

const Title = styled.div`
    font-size: ${({theme}) => theme.titleFontSize};
`;

const HeaderComponent = () => (
    <Header>
        <Title>Jarvis</Title>
    </Header>
);

export default HeaderComponent;
