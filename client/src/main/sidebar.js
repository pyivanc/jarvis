import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { withRouter } from 'react-router-dom';

const StyledList = styled(List)`
    grid-area: sidebar;
    border-right: 1px solid black;
`;

const Sidebar = (props) => {
    const goTo = (route) => props.history.push(route);
    return (
        <StyledList component="nav">
            <List>
                <ListItem button>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="TODO" onClick={() => goTo('todos')} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jira" onClick={() => goTo('jira')} />
                </ListItem>
            </List>
        </StyledList>
    );
}

export default withRouter(Sidebar);