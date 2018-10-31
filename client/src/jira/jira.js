import * as React from 'react';
import styled from 'styled-components';
import { getJiraTicket } from './actions';

const StyledJira = styled.div`
`;

export default class Jira extends React.Component {
    async componentWillMount() {
        const ticket = await getJiraTicket();
        this.setState({ ticket })
    }
    render() {
        return (
            <StyledJira>
                Jira 3
            </StyledJira>
        )
    }
}