import * as React from 'react';
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
    grid-template-rows: 40px auto;
    grid-template-columns: 50px auto;
    grid-template-areas:
        "header header"
        "sidebar content";
`;


export default () => (
    <Router>
        <ThemeProvider theme={mainTheme}>
            <div>
                <Header />
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/todos' component={Todos} />
                    <Route path='/jira' component={Jira} />
                </div>
            </div>
        </ThemeProvider>
    </Router>
);