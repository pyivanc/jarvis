import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

const StyledList = styled(List)`
    grid-area: sidebar;
`;

export default () => (
    <StyledList component="nav">
        <List>
            <ListItem button>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
        <Divider />
        <List component="nav">
            <ListItem button>
                <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItem>
        </List>
    </StyledList>
);