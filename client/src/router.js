import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Sidebar } from './main';
import Home from './home';
import Todos from './todos';
import Jira from './jira';
import { mainTheme } from './theme';

import { HashRouter as Router, Route } from 'react-router-dom';

const App = styled.div`
    height: 100vh;
    display: grid;
    background-color: ${({theme}) => theme.pallete.white};
    grid-template-rows: 65px auto;
    grid-template-columns: 200px auto;
    grid-template-areas:
        "header header"
        "sidebar content";
`;

const Content = styled.div`
    grid-area: content;
    padding: 20px;
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
                    <Route path='/jira' component={Jira} />
                </Content>
            </App>
        </ThemeProvider>
    </Router>
);