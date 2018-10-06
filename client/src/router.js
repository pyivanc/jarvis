import React from 'react';
import styled from 'styled-components';
import Home from './home';
import Todos from './todos';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = styled.div`
    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-columns: 10rem auto;
    grid-template-areas:
        "header header"
        "sidebar content";
`;

const Sidebar = styled.div`
    grid-area: sidebar;
`;

const Section = styled.div`
`;

const Header = styled.div`
    grid-area: header;
`;

const Content = styled.div`
    grid-area: content;
`;

const Title = styled.div`

`;

export default () => (
    <Router>
        <App>
            <Header>
                <Title>Jarvis</Title>
            </Header>
            <Sidebar>
                <Section>
                    <Link to='/'>Home</Link>
                    <Link to='/todos'>TODO</Link>
                </Section>
            </Sidebar>
            <Content>
                <Route exact path='/' component={Home} />
                <Route path='/todos' component={Todos} />
            </Content>
        </App>
    </Router>
);