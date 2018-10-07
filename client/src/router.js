import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Sidebar } from './main';
import Home from './home';
import Todos from './todos';
import { mainTheme } from './theme';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = styled.div`
    height: 100vh;
    display: grid;
    background-color: ${props => props.theme.primary};
    grid-template-rows: 2rem auto;
    grid-template-columns: 5rem auto;
    grid-template-areas:
        "header header"
        "sidebar content";
`;

const Content = styled.div`
    grid-area: content;
`;

export default () => (
    <Router>
        <ThemeProvider theme={mainTheme}>
            <App>
                <Header />
                <Sidebar />
                <Content>
                    <Route exact path='/' component={Home} />
                    <Route path='/todos' component={Todos} />
                </Content>
            </App>
        </ThemeProvider>
    </Router>
);