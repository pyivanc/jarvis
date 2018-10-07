import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
    grid-area: sidebar;
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.background};
`;

const Section = styled.div`

`;
export default () => (
    <Sidebar>
        <Section>
            <Link to='/'>Home</Link>
        </Section>
        <Section>
            <Link to='/todos'>TODO</Link>
        </Section>
    </Sidebar>
);