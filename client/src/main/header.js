import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = styled(AppBar)`
    grid-area: header;
`;

export default () => (
    <Header position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Jarvis
            </Typography>
        </Toolbar>
    </Header>
);