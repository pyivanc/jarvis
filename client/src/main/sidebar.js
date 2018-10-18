import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const StyledSidebar = styled.div`
    grid-area: sidebar;
    background-color: ${({theme}) => theme.pallete.black};
    color: ${({theme}) => theme.pallete.white};
`;

const StyledSection = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 50px;
    color: ${({theme}) => theme.pallete.white};
`;

const SidebarComponent = () => (
    <StyledSidebar>
            <StyledSection to='/'>
                <FontAwesomeIcon icon={faHome} />
            </StyledSection>
            <StyledSection to='/todos'>
                <FontAwesomeIcon icon={faList} />
            </StyledSection>
            <StyledSection to='/jira'>
                <FontAwesomeIcon icon={faUsers} />
            </StyledSection>
    </StyledSidebar>
);

export default SidebarComponent;
